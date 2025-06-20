export interface ITestimonial {
  _id: string;
  auth_id: {
    fullName: string;
    avatar: string;
  };
  designation: string;
  testimonial: string;
}
