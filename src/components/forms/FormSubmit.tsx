import { cn } from "@/lib/utils";
import { Button } from "../ui";

export const FormSubmit = ({
  label,
  className,
  loading,
  meets,
}: {
  label: string;
  className?: string;
  loading?: boolean;
  meets?: boolean;
}) => {
  return (
    <Button disabled={loading || !meets} className={cn("w-full", className)}>
      {loading ? "loading" : label}
    </Button>
  );
};
