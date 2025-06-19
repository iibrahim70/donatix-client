"use client";

import { Input, Label } from "../ui";

export const FormInput = ({
  label,
  type = "text",
  register,
  errors,
  icon: Icon,
}) => (
  <div className="space-y-1.5">
    <Label className="text-white/70">{label}</Label>

    <div className="relative">
      <span className="absolute inset-y-0 left-2.5 flex items-center">
        <Icon className="size-5 text-white/50" />
      </span>

      <Input type={type} autoComplete="off" className="px-10" {...register} />
    </div>

    {errors && (
      <span className="text-rose-600/80 text-xs font-medium">
        {errors?.message}
      </span>
    )}
  </div>
);
