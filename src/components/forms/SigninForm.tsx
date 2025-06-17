"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input, Label } from "../ui";
import { FormSubmit } from "./FormSubmit";

export const SigninFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <Label>Email</Label>

        <Input
          type="email"
          autoComplete="off"
          {...register("email", { required: true })}
        />
        {errors?.email && (
          <span className="text-rose-600 text-sm">Enter a valid Email</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label>Password</Label>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />

          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>

        {errors?.password && (
          <span className="text-rose-600 text-sm">Enter a valid Password</span>
        )}
      </div>

      <FormSubmit title="Signin" loading={loading} />
    </form>
  );
};
