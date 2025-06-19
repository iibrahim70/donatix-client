"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { CheckPassword, Input, Label } from "../ui";
import { FormInput } from "./FormInput";
import { FormSubmit } from "./FormSubmit";
import Link from "next/link";
import SocialLogin from "../ui/social-login";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const password = watch("password");

  // Password validation criteria states
  const hasMinLength = password?.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
  const allCriteriaMet =
    hasMinLength && hasCapitalLetter && hasSpecialCharacter;

  console.table({
    hasMinLength,
    hasCapitalLetter,
    hasSpecialCharacter,
    allCriteriaMet,
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <FormInput
            label="First Name"
            register={register("firstName", {
              required: "First name is required",
            })}
            errors={errors?.firstName}
            icon={User}
            isRequired
          />

          <FormInput
            label="Last Name"
            register={register("lastName", {
              required: "Last name is required",
            })}
            errors={errors?.lastName}
            icon={User}
            isRequired
          />
        </div>

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
          isRequired
        />

        <div className="space-y-1">
          <div className="space-y-1.5">
            <Label className="text-white/70">
              Password <span className="text-rose-600">*</span>
            </Label>

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 p-2.5 border rounded-md">
            <CheckPassword meets={hasMinLength} text="At least 8 characters" />

            <CheckPassword
              meets={hasCapitalLetter}
              text="One uppercase letter"
            />

            <CheckPassword
              meets={hasSpecialCharacter}
              text="One special character"
            />
          </div>
        </div>

        <FormInput
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          register={register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
          errors={errors?.confirmPassword}
          icon={Lock}
          isRequired
        />
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

      <SocialLogin />
    </form>
  );
};
