import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface FormWrapperProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
}

const FormWrapper = ({ onSubmit, children, className }: FormWrapperProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default FormWrapper;
