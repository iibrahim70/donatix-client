"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { CheckPassword, Input, Label } from "../ui";
import { FormInput } from "./FormInput";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
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
    setIsLoading(true);
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Here you would typically show a success message, e.g., using a toast library
    alert("Signup successful!");
    reset();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
        label="Middle Name"
        register={register("middleName")}
        errors={errors?.middleName}
        icon={User}
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

      <div className="space-y-2.5">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 p-2.5 border rounded-xl">
          <CheckPassword meets={hasMinLength} text="At least 8 characters" />

          <CheckPassword meets={hasCapitalLetter} text="One uppercase letter" />

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

      <button
        type="submit"
        className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-teal-600 text-white font-bold text-base transition-all duration-300 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating Account...
          </>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
};

// "use client";

// import { ReactNode, useState } from "react";
// import { FieldValues, useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { Label } from "../ui/label";
// import FormSubmit from "./FormSubmit";
// import { Input } from "../ui/input";
// import { Eye, EyeOff } from "lucide-react";

// const SignupFrom = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setIsLoading] = useState<boolean>(false);

//   const {
//     register,
//     watch,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const password = watch("password");

//   const onSubmit = async (data: FieldValues) => {
//     console.log(data);
//   };

//   return (
//     <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
//       <div className="space-y-2.5">
//         <Label>First Name</Label>
//         <Input
//           type="text"
//           autoComplete="off"
//           {...register("firstName", { required: true })}
//         />
//         {errors?.fullName && (
//           <span className="text-rose-600 text-sm">Name is required</span>
//         )}
//       </div>

//       <div className="space-y-2.5">
//         <Label>Middle Name</Label>
//         <Input
//           type="text"
//           autoComplete="off"
//           {...register("middleName", { required: true })}
//         />
//         {errors?.fullName && (
//           <span className="text-rose-600 text-sm">Name is required</span>
//         )}
//       </div>
//       <div className="space-y-2.5">
//         <Label>Last Name</Label>
//         <Input
//           type="text"
//           autoComplete="off"
//           {...register("lastName", { required: true })}
//         />
//         {errors?.fullName && (
//           <span className="text-rose-600 text-sm">Name is required</span>
//         )}
//       </div>

//       <div className="space-y-2.5">
//         <Label>Email</Label>
//         <Input
//           type="email"
//           autoComplete="off"
//           {...register("email", { required: true })}
//         />
//         {errors?.email && (
//           <span className="text-rose-600 text-sm">Email is required</span>
//         )}
//       </div>

//       <div className="space-y-2.5">
//         <Label>Password</Label>
//         <div className="relative">
//           <Input
//             type={showPassword ? "text" : "password"}
//             {...register("password", {
//               required: "Password is required",
//               validate: {
//                 minLength: (value) =>
//                   value?.length >= 8 ||
//                   "Password must be at least 6 characters long!",
//                 capitalLetter: (value) =>
//                   /[A-Z]/.test(value) ||
//                   "Password must contain at least one capital letter!",
//                 specialCharacter: (value) =>
//                   /[!@#$%^&*]/.test(value) ||
//                   "Password must contain at least one special character!",
//               },
//             })}
//           />

//           <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
//             <button
//               type="button"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <Eye /> : <EyeOff />}
//             </button>
//           </div>
//         </div>

//         {errors?.password && (
//           <span className="text-rose-600 text-sm">
//             {errors?.password?.message as ReactNode}
//           </span>
//         )}
//       </div>

//       <div className="space-y-2.5">
//         <Label>Confirm Password</Label>

//         <Input
//           type={showPassword ? "text" : "password"}
//           {...register("confirmPassword", {
//             required: "Confirm Password is required",
//             validate: (value) =>
//               value === password || "Passwords do not match!",
//           })}
//         />

//         {errors?.confirmPassword && (
//           <span className="text-rose-600 text-sm">
//             {errors?.confirmPassword?.message as ReactNode}
//           </span>
//         )}
//       </div>

//       <FormSubmit title="Signup" loading={loading} />
//     </form>
//   );
// };

// export default SignupFrom;
