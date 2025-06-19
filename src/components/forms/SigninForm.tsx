"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { CheckPassword, Input, Label } from "../ui";
import { FormInput } from "./FormInput";
import { FormSubmit } from "./FormSubmit";
import Link from "next/link";
import SocialLogin from "../ui/social-login";

export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <FormInput
          label="Email Address"
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          errors={errors?.email}
          icon={Mail}
        />

        <div className="space-y-1">
          <div className="space-y-1.5">
            <Label className="text-white/70">Password</Label>

            <div className="relative">
              <span className="absolute inset-y-0 left-2.5 flex items-center">
                <Lock className="size-5 text-white/50" />
              </span>

              <Input
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                className="px-10"
                {...register("password", {
                  required: "Password is required.",
                  validate: {
                    minLength: (value) =>
                      value.length >= 8 ||
                      "Password must be at least 8 characters.",
                    capitalLetter: (value) =>
                      /[A-Z]/.test(value) || "Must contain a capital letter.",
                    specialCharacter: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      "Must contain a special character.",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2.5 cursor-pointer flex items-center text-white/70"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            {errors?.password && (
              <span className="text-rose-600/80 text-xs font-medium">
                {errors?.password?.message?.toString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3.5">
        <div className="text-right pt-2">
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:underline text-[15px] font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <FormSubmit label="Signin" />
      </div>

      <div className="space-y-2">
        <SocialLogin />

        <p>
          Don't have an account yet? {""}
          <Link
            href="/signup"
            className="text-blue-600 hover:text-blue-500 underline underline-offset-4 transition-colors duration-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};
