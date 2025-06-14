export interface ICause {
  _id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  images: string[];
  videos: string[];
  target_amount: number;
  received_amount: number;
  category: string;
  tags: string[];
  end_date: string;
  created_at: string;
}
