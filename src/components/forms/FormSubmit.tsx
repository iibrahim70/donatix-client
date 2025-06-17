import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui";

interface FormSubmitProps {
  loading: boolean;
  title: string;
}

export const FormSubmit = ({ title, loading }: FormSubmitProps) => {
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
