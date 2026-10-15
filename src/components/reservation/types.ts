export type ReservationFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  requestContent: string;
  preferredDate: string;
};

export type AttachedImage = {
  id: string;
  file: File;
  previewUrl: string;
};

export type ApiResult = {
  success: boolean;
  message?: string;
};

export type SubmitStatus =
  | { type: "idle"; message: "" }
  | { type: "error" | "success"; message: string };
