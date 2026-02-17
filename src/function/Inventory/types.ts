export type Item = {
  id: number;
  user: string;
  productName: string;
  quantity: number;
  expiryDate?: { year: string; month: string; day: string };
  mfgDate?: { year: string; month: string; day: string };
};