export interface IBlog {
  _id: string;
  auth_id: {
    _id: string;
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  short_description: string;
  image: string;
  tags: string[];
  published_at: string;
}
