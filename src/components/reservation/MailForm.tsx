"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import FormField from "./FormField";
import styles from "./reservation.module.css";
import type {
  ApiResult,
  AttachedImage,
  ReservationFormData,
  SubmitStatus,
} from "./types";

const INITIAL_FORM: ReservationFormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  requestContent: "",
  preferredDate: "",
};

const MAX_TOTAL_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_MESSAGE_LENGTH = 1000;

function toDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function MailForm() {
  const [form, setForm] = useState<ReservationFormData>(INITIAL_FORM);
  const [images, setImages] = useState<AttachedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });
  const imagesRef = useRef<AttachedImage[]>([]);

  const minimumDate = useMemo(() => toDateInputValue(new Date()), []);
  const totalImageSize = useMemo(
    () => images.reduce((total, image) => total + image.file.size, 0),
    [images],
  );

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
      });
    };
  }, []);

  function updateForm<K extends keyof ReservationFormData>(
    key: K,
    value: ReservationFormData[K],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function validate() {
    if (!form.name.trim()) return "お名前を入力してください。";
    if (!form.email.trim()) return "メールアドレスを入力してください。";
    if (!form.requestContent.trim()) return "ご相談内容を入力してください。";

    if (form.requestContent.length > MAX_MESSAGE_LENGTH) {
      return `ご相談内容は${MAX_MESSAGE_LENGTH}文字以内で入力してください。`;
    }

    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const validationError = validate();

    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await sendMail();
      await saveReservation();
      clearForm(false);
      setStatus({
        type: "success",
        message: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
      });
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "送信に失敗しました。時間をおいて再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function sendMail() {
    const body = new FormData();

    body.append("name", form.name);
    body.append("tell", form.phone);
    body.append("email", form.email);
    body.append("address", form.address);
    body.append("content", form.requestContent);
    body.append("preferredDate", form.preferredDate);

    images.forEach((image) => {
      body.append("images[]", image.file);
    });

    const response = await fetch("/api/send", {
      method: "POST",
      body,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "メールの送信に失敗しました。");
    }
  }

  async function saveReservation() {
    const response = await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const text = await response.text();
    let result: ApiResult;

    try {
      result = JSON.parse(text) as ApiResult;
    } catch {
      throw new Error("予約情報の保存中にエラーが発生しました。");
    }

    if (!response.ok || !result.success) {
      throw new Error(result.message ?? "予約情報の保存に失敗しました。");
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = "";

    if (selectedFiles.length === 0) return;

    if (selectedFiles.some((file) => !file.type.startsWith("image/"))) {
      setStatus({ type: "error", message: "画像ファイルを選択してください。" });
      return;
    }

    const addedSize = selectedFiles.reduce(
      (total, file) => total + file.size,
      0,
    );

    if (totalImageSize + addedSize > MAX_TOTAL_IMAGE_SIZE) {
      setStatus({
        type: "error",
        message: "添付画像の合計容量は5MB以内にしてください。",
      });
      return;
    }

    const newImages = selectedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setImages((current) => [...current, ...newImages]);
    setStatus({ type: "idle", message: "" });
  }

  function removeImage(id: string) {
    setImages((current) => {
      const target = current.find((image) => image.id === id);

      if (target) URL.revokeObjectURL(target.previewUrl);

      return current.filter((image) => image.id !== id);
    });
  }

  function clearForm(clearStatus = true) {
    setForm(INITIAL_FORM);
    setImages((current) => {
      current.forEach((image) => URL.revokeObjectURL(image.previewUrl));
      return [];
    });

    if (clearStatus) setStatus({ type: "idle", message: "" });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGrid}>
        <FormField id="customer-name" label="お名前" required>
          <input
            id="customer-name"
            name="name"
            type="text"
            autoComplete="name"
            className={styles.input}
            placeholder="例：山田 太郎"
            value={form.name}
            onChange={(event) => updateForm("name", event.target.value)}
            required
          />
        </FormField>

        <FormField id="customer-phone" label="電話番号">
          <input
            id="customer-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={styles.input}
            placeholder="例：090-1234-5678"
            value={form.phone}
            onChange={(event) => updateForm("phone", event.target.value)}
          />
        </FormField>

        <FormField id="customer-email" label="メールアドレス" required>
          <input
            id="customer-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={styles.input}
            placeholder="例：info@example.com"
            value={form.email}
            onChange={(event) => updateForm("email", event.target.value)}
            required
          />
        </FormField>

        <FormField id="customer-address" label="ご住所（市区町村まで）">
          <input
            id="customer-address"
            name="address"
            type="text"
            autoComplete="address-level2"
            className={styles.input}
            placeholder="例：兵庫県宝塚市"
            value={form.address}
            onChange={(event) => updateForm("address", event.target.value)}
          />
        </FormField>

        <div className={styles.fullWidth}>
          <FormField
            id="request-content"
            label="ご相談・ご依頼内容"
            hint="お困りごとの内容やご希望を、わかる範囲でご記入ください。"
            required
          >
            <textarea
              id="request-content"
              name="requestContent"
              className={styles.textarea}
              placeholder="例：退去に伴う片付けと不用品回収をお願いしたいです。"
              value={form.requestContent}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={(event) =>
                updateForm("requestContent", event.target.value)
              }
              required
            />

            <p className={styles.counter}>
              {form.requestContent.length} / {MAX_MESSAGE_LENGTH}文字
            </p>
          </FormField>
        </div>

        <FormField
          id="preferred-date"
          label="ご希望日"
          hint="確定日時ではありません。担当者より折り返しご連絡します。"
        >
          <input
            id="preferred-date"
            name="preferredDate"
            type="date"
            min={minimumDate}
            className={styles.input}
            value={form.preferredDate}
            onChange={(event) =>
              updateForm("preferredDate", event.target.value)
            }
          />
        </FormField>

        <FormField
          id="reservation-images"
          label="参考画像"
          hint="複数選択可・合計5MBまで"
        >
          <input
            id="reservation-images"
            type="file"
            accept="image/*"
            multiple
            className={styles.visuallyHidden}
            onChange={handleImageChange}
          />

          <label className={styles.uploadButton} htmlFor="reservation-images">
            <UploadIcon />
            画像を選択
          </label>

          <span className={styles.fileSize}>
            {(totalImageSize / 1024 / 1024).toFixed(2)}MB / 5MB
          </span>
        </FormField>
      </div>

      {images.length > 0 && (
        <div className={styles.previewGrid} aria-label="選択した画像">
          {images.map((image) => (
            <figure className={styles.preview} key={image.id}>
              <img src={image.previewUrl} alt={image.file.name} />
              <button type="button" onClick={() => removeImage(image.id)}>
                削除
              </button>
            </figure>
          ))}
        </div>
      )}

      {status.type !== "idle" && (
        <p
          className={status.type === "success" ? styles.success : styles.error}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.message}
        </p>
      )}

      <p className={styles.privacyNote}>
        ご入力いただいた情報は、お問い合わせへの対応目的にのみ使用します。
      </p>

      <div className={styles.actions}>
        <button
          className={styles.secondaryButton}
          type="button"
          onClick={() => clearForm()}
          disabled={isSubmitting}
        >
          入力内容をクリア
        </button>

        <button
          className={styles.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          <MailIcon />
          {isSubmitting ? "送信しています…" : "この内容で送信する"}
        </button>
      </div>
    </form>
  );
}

function UploadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 16V4m0 0L7 9m5-5 5 5M5 14v5h14v-5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
