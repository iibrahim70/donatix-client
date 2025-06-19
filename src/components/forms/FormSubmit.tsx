import { Button } from "../ui";

export const FormSubmit = ({
  label,
  loading,
}: {
  label: string;
  loading?: boolean;
}) => {
  return (
    <Button disabled={loading} className="w-full">
      {loading ? "loading" : label}
    </Button>
  );
};
