export interface ICause {
  _id: string;
  title: string;
  description: string;
  images: string[];
  videos: string[];
  target_amount: number;
  received_amount: number;
  category: string;
  tags: string[];
}
