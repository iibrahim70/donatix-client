import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Spinner from "../ui/spinner";

interface FormSubmitProps {
  loading: boolean;
  title: string;
}

const FormSubmit = ({ title, loading }: FormSubmitProps) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={cn(
        "w-full",
        loading && buttonVariants({ variant: "loading" })
      )}
    >
      {loading ? <Spinner /> : title}
    </Button>
  );
};

export default FormSubmit;
