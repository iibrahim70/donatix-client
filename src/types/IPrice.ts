export interface IPrice {
  _id: number;
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  highlight: boolean;
  buttonText: string;
}
