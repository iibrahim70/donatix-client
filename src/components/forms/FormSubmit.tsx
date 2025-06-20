import { cn } from "@/lib/utils";
import { Button } from "../ui";

interface FormSubmitProps {
  label: string;
  className?: string;
  loading?: boolean;
  meets?: boolean;
}

export const FormSubmit = ({
  label,
  className,
  loading,
  meets = true,
}: FormSubmitProps) => {
  return (
    <Button disabled={loading || !meets} className={cn("w-full", className)}>
      {loading ? "loading" : label}
    </Button>
  );
};
