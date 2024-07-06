export type TScreenSize = "xl" | "lg" | "md" | "sm";

export interface ICause {
  _id: string;
  title: string;
  description: string;
  donationImage: string;
  category: string;
  amount: number;
}

export interface IBlog {
  _id: string;
  avatar: string;
  fullName: string;
  title: string;
  description: string;
  details: string;
  bannerImage: string;
  publishedDate: string;
}

export interface ITestimonial {
  _id: string;
  fullName: string;
  designation: string;
  testimonial: string;
  userImage: string;
}
