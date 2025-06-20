"use client";

import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Input, Label } from "../ui";
import { LucideIcon } from "lucide-react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  icon: LucideIcon;
}

export const FormInput = ({
  label,
  type,
  placeholder,
  register,
  errors,
  icon: Icon,
}: FormInputProps) => (
  <div className="space-y-1.5">
    <Label className="text-white/70">{label}</Label>

    <div className="relative">
      <span className="absolute inset-y-0 left-2.5 flex items-center">
        <Icon className="size-5 text-white/50" />
      </span>

      <Input
        type={type}
        autoComplete="off"
        className="px-10"
        placeholder={placeholder}
        {...register}
      />
    </div>

    {errors && (
      <span className="text-rose-600/80 text-xs font-medium">
        {typeof errors?.message === "string" ? errors?.message : null}
      </span>
    )}
  </div>
);
