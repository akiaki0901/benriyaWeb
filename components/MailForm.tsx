"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./mail.module.css";

type MailFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  requestContent: string;
  preferredDate: string;
};

type ImageFile = {
  id: string;
  file: File;
  previewUrl: string;
};

type ApiResult = {
  success: boolean;
  message?: string;
};

const INITIAL_MAIL: MailFormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  requestContent: "",
  preferredDate: "",
};

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export default function MailForm() {
  const [mail, setMail] = useState<MailFormData>(INITIAL_MAIL);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(false);

  const totalImageSize = useMemo(() => {
    return images.reduce((total, image) => total + image.file.size, 0);
  }, [images]);

  useEffect(() => {
    return () => {
      for (const image of images) {
        URL.revokeObjectURL(image.previewUrl);
      }
    };
  }, [images]);

  function updateMail<K extends keyof MailFormData>(
    key: K,
    value: MailFormData[K],
  ) {
    setMail((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function validate(): string | null {
    if (!mail.name.trim()) {
      return "名前を入力してください";
    }

    if (!mail.email.trim()) {
      return "メールアドレスを入力してください";
    }

    if (!mail.requestContent.trim()) {
      return "依頼内容を入力してください";
    }

    if (mail.requestContent.length > 1000) {
      return "依頼内容は1000文字以下にしてください";
    }

    return null;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) {
      return;
    }

    const validationError = validate();

    if (validationError) {
      alert(validationError);
      return;
    }

    setLoading(true);

    try {
      await sendMail();
      await saveReservation(mail);

      alert("送信と予約情報の保存に成功しました");

      clearForm();
    } catch (error) {
      console.error("フォーム送信エラー:", error);

      alert(
        error instanceof Error
          ? error.message
          : "送信に失敗しました",
      );
    } finally {
      setLoading(false);
    }
  }

  async function sendMail(): Promise<void> {
    const formData = new FormData();

    formData.append("name", mail.name);
    formData.append("tell", mail.phone);
    formData.append("email", mail.email);
    formData.append("address", mail.address);
    formData.append("content", mail.requestContent);
    formData.append("preferredDate", mail.preferredDate);

    for (const image of images) {
      formData.append("images[]", image.file);
    }

    const response = await fetch("/api/send", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text();

      throw new Error(
        text || "メールの送信に失敗しました",
      );
    }
  }

  async function saveReservation(
    data: MailFormData,
  ): Promise<void> {
    const response = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        requestContent: data.requestContent,
        preferredDate: data.preferredDate,
      }),
    });

    const text = await response.text();

    let result: ApiResult;

    try {
      result = JSON.parse(text) as ApiResult;
    } catch {
      throw new Error(
        `予約APIから不正な応答が返されました: ${text.slice(0, 200)}`,
      );
    }

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ??
          "スプレッドシートへの保存に失敗しました",
      );
    }
  }

  function handleImageChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("画像ファイルを選択してください");
      event.target.value = "";
      return;
    }

    if (totalImageSize + file.size > MAX_IMAGE_SIZE) {
      alert("画像の合計容量は5MB以下にしてください");
      event.target.value = "";
      return;
    }

    const image: ImageFile = {
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
    };

    setImages((current) => [...current, image]);

    // 同じファイルを続けて選択できるようにする
    event.target.value = "";
  }

  function removeImage(id: string) {
    setImages((current) => {
      const target = current.find((image) => image.id === id);

      if (target) {
        URL.revokeObjectURL(target.previewUrl);
      }

      return current.filter((image) => image.id !== id);
    });
  }

  function clearForm() {
    setMail(INITIAL_MAIL);

    setImages((current) => {
      for (const image of current) {
        URL.revokeObjectURL(image.previewUrl);
      }

      return [];
    });
  }

  return (
    <form
      className={styles.container}
      onSubmit={submit}
      autoComplete="on"
    >
      <h1 className={styles.title}>
        ご依頼メール送信フォーム
      </h1>

      <label className={styles.subtitle} htmlFor="customer-name">
        お名前
      </label>

      <input
        id="customer-name"
        name="name"
        type="text"
        autoComplete="name"
        className={styles.input}
        value={mail.name}
        onChange={(event) =>
          updateMail("name", event.target.value)
        }
        required
      />

      <label className={styles.subtitle} htmlFor="customer-phone">
        電話番号
      </label>

      <input
        id="customer-phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        className={styles.input}
        value={mail.phone}
        onChange={(event) =>
          updateMail("phone", event.target.value)
        }
      />

      <label className={styles.subtitle} htmlFor="customer-email">
        メールアドレス
      </label>

      <input
        id="customer-email"
        name="email"
        type="email"
        autoComplete="email"
        className={styles.input}
        value={mail.email}
        onChange={(event) =>
          updateMail("email", event.target.value)
        }
        required
      />

      <label className={styles.subtitle} htmlFor="customer-address">
        ご住所（市区町村まで）
      </label>

      <input
        id="customer-address"
        name="address"
        type="text"
        autoComplete="address-level2"
        className={styles.input}
        value={mail.address}
        onChange={(event) =>
          updateMail("address", event.target.value)
        }
      />

      <label className={styles.subtitle} htmlFor="request-content">
        依頼内容（どんなことでも気軽にどうぞ）
      </label>

      <textarea
        id="request-content"
        name="requestContent"
        autoComplete="off"
        className={styles.textarea}
        value={mail.requestContent}
        maxLength={1000}
        onChange={(event) =>
          updateMail("requestContent", event.target.value)
        }
        required
      />

      <p>
        {mail.requestContent.length} / 1000文字
      </p>

      <label className={styles.subtitle} htmlFor="preferred-date">
        希望の日付
      </label>

      <input
        id="preferred-date"
        name="preferredDate"
        type="date"
        min="2026-07-21"
        max="2026-12-31"
        autoComplete="off"
        className={styles.input}
        value={mail.preferredDate}
        onChange={(event) =>
          updateMail("preferredDate", event.target.value)
        }
      />

      <p className={styles.subtitle}>
        写真（合計5MBまで）
      </p>

      <input
        id="file"
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={handleImageChange}
      />

      <label htmlFor="file">
        ＋画像を追加
      </label>

      <p>
        {(totalImageSize / 1024 / 1024).toFixed(2)}MB / 5MB
      </p>

      <div className={styles.images}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              className={styles.image}
              src={image.previewUrl}
              alt="選択された画像"
              width={100}
              height={100}
            />

            <button
              type="button"
              onClick={() => removeImage(image.id)}
            >
              削除
            </button>
          </div>
        ))}
      </div>

      <span className={styles.btns}>
        <button
          type="submit"
          className={styles.btn}
          disabled={loading}
        >
          {loading ? "送信中..." : "送信"}
        </button>

        <button
          type="button"
          className={styles.btn}
          onClick={clearForm}
          disabled={loading}
        >
          クリア
        </button>
      </span>
    </form>
  );
}