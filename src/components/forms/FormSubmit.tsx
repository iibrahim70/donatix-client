import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../ui/LoadingSpinner";

interface FormSubmitProps {
  loading: boolean;
  title: string;
}

const FormSubmit = ({ loading, title }: FormSubmitProps) => {
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        disabled={loading}
        className={cn(loading && buttonVariants({ variant: "loading" }))}
      >
        {loading ? <LoadingSpinner /> : title}
      </Button>
    </div>
  );
};

export default FormSubmit;
