// フォームから受け取る文字列データ
export type ReservationBody = {
  name: string;
  phone: string;
  email: string;
  address: string;
  requestContent: string;
  preferredDate: string;
};

// Apps Scriptに送るデータ
export type ReservationRecord = ReservationBody & {
  imageUrls: string[];
};