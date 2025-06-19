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
    <Button disabled={loading || !meets} className="w-full">
      {loading ? "loading" : label}
    </Button>
  );
};
