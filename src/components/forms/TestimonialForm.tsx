import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";

interface TestimonialFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TestimonialForm = ({ register, errors }: TestimonialFormProps) => {
  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label>User Id</label>
        <Input
          type="text"
          defaultValue={userId as string}
          readOnly
          {...register("createdBy", { required: true })}
        />
      </div>

      <div className="space-y-1">
        <label>Full Name</label>
        <Input type="text" {...register("fullName", { required: true })} />
        {errors?.fullName && (
          <span className="text-red-500 text-sm">Full Name is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Designation</label>
        <Input type="text" {...register("designation", { required: true })} />
        {errors?.designation && (
          <span className="text-red-500 text-sm">Designation is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>User Image URL</label>
        <Input type="url" {...register("userImage", { required: true })} />
        {errors?.userImage && (
          <span className="text-red-500 text-sm">
            User Image URL is required
          </span>
        )}
      </div>

      <div className="space-y-1">
        <label>Testimonial</label>
        <textarea
          rows={5}
          className="flex resize-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 outline-none"
          {...register("testimonial", { required: true })}
        ></textarea>
        {errors?.testimonial && (
          <span className="text-red-500 text-sm">Testimonial is required</span>
        )}
      </div>
    </div>
  );
};

export default TestimonialForm;
