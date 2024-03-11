import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { IDonations } from "@/types";

interface DonationsFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  data?: IDonations;
}

const DonationsForm = ({ register, errors, data }: DonationsFormProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label>Donation Title</label>
        <Input
          type="text"
          defaultValue={data?.title}
          {...register("title", { required: true })}
        />
        {errors?.title && (
          <span className="text-red-500 text-sm">
            Donation Title is required
          </span>
        )}
      </div>

      <div className="space-y-1">
        <label>Description</label>
        <textarea
          rows={5}
          className="flex resize-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 outline-none"
          defaultValue={data?.description}
          {...register("description", { required: true })}
        ></textarea>
        {errors?.description && (
          <span className="text-red-500 text-sm">Description is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Donation Image URL</label>
        <Input
          type="url"
          defaultValue={data?.donationImage}
          {...register("donationImage", { required: true })}
        />
        {errors?.donationImage && (
          <span className="text-red-500 text-sm">
            Donation Image URL is required
          </span>
        )}
      </div>

      <div className="space-y-1">
        <label>Category</label>
        <select
          className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 outline-none"
          {...register("category", { required: true })}
        >
          <option value="">Select a category</option>
          <option value="Shelter">Shelter</option>
          <option value="Food & Water">Food & Water</option>
          <option value="Medical">Medical</option>
          <option value="Rescue Ops">Rescue Ops</option>
          <option value="Rebuilding">Rebuilding</option>
          <option value="Child & Vulnerable Care">
            Child & Vulnerable Care
          </option>
          <option value="Sanitation">Sanitation</option>
          <option value="Clothing & Goods">Clothing & Goods</option>
          <option value="Comm & Power">Comm & Power</option>
          <option value="Logistics">Logistics</option>
        </select>
        {errors?.category && (
          <span className="text-red-500 text-sm">Category is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Need Amount ($)</label>
        <Input
          type="number"
          defaultValue={data?.amount}
          {...register("amount", { required: true })}
        />
        {errors?.amount && (
          <span className="text-red-500 text-sm">Amount is required</span>
        )}
      </div>
    </div>
  );
};

export default DonationsForm;
