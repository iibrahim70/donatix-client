import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";

interface VolunteerFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const VolunteerForm = ({ register, errors }: VolunteerFormProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label>Full Name</label>
        <Input type="text" {...register("fullName", { required: true })} />
        {errors?.fullName && (
          <span className="text-red-500 text-sm">Full Name is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Email</label>
        <Input type="email" {...register("email", { required: true })} />
        {errors?.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Phone</label>
        <Input type="string" {...register("phone", { required: true })} />
        {errors?.phone && (
          <span className="text-red-500 text-sm">Phone is required</span>
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
        <label>Availability</label>
        <Input type="text" {...register("availability", { required: true })} />
        {errors?.availability && (
          <span className="text-red-500 text-sm">Availability is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Present Address</label>
        <textarea
          rows={5}
          className="flex resize-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 outline-none"
          {...register("address", { required: true })}
        ></textarea>
        {errors?.address && (
          <span className="text-red-500 text-sm">
            Present Address is required
          </span>
        )}
      </div>
    </div>
  );
};

export default VolunteerForm;
