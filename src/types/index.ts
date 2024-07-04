export type TScreenSize = "xl" | "lg" | "md" | "sm";

export interface ITestimonial {
  _id: string;
  fullName: string;
  designation: string;
  testimonial: string;
  userImage: string;
}

export interface IDonation {
  _id: string;
  title: string;
  description: string;
  donationImage: string;
  category: string;
  amount: number;
}
