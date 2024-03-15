import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";

interface DonationTransactionFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  donationId: string;
}

const DonationTransactionForm = ({
  register,
  errors,
  donationId,
}: DonationTransactionFormProps) => {
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
          {...register("donatedBy", { required: true })}
        />
      </div>

      <div className="space-y-1">
        <label>Donation Id</label>
        <Input
          type="text"
          defaultValue={donationId as string}
          readOnly
          {...register("donationId", { required: true })}
        />
      </div>

      <div className="space-y-1">
        <label>Amount</label>
        <Input type="number" {...register("amount", { required: true })} />
        {errors?.title && (
          <span className="text-red-500 text-sm">Amount is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Message</label>
        <textarea
          rows={5}
          className="flex resize-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 outline-none"
          {...register("message")}
        ></textarea>
      </div>
    </div>
  );
};

export default DonationTransactionForm;
