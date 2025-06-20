import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface FormWrapperProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
}

export const FormWrapper = ({
  onSubmit,
  children,
  className,
}: FormWrapperProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};
