import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  loading: boolean;
  title: string;
}

const FormSubmit = ({ title, loading }: FormSubmitProps) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={cn("w-full", loading && buttonVariants({}))}
    >
      {loading ? <p>loading</p> : title}
    </Button>
  );
};

export default FormSubmit;
