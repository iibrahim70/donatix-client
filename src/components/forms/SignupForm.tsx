import axios from "axios";
import { ReactNode, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Label } from "../ui/label";
import FormSubmit from "./FormSubmit";
import { Input } from "../ui/input";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const SignupFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://givers-heaven-server.vercel.app/api/v1/users/register",
        data
      );

      if (res?.data?.success === true) {
        navigate(from, { replace: true });
        const userId = res?.data?.data?._id;
        localStorage.setItem("userId", userId);
        setIsLoading(false);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        throw new Error("Failed to signup. Please try again later.");
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <Label className="font-medium">Full Name</Label>
        <Input type="text" {...register("fullName", { required: true })} />
        {errors?.fullName && (
          <span className="text-vivid-red text-sm">Name is required</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Email</Label>
        <Input type="email" {...register("email", { required: true })} />
        {errors?.email && (
          <span className="text-vivid-red text-sm">Email is required</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              validate: {
                minLength: (value) =>
                  value?.length >= 8 ||
                  "Password must be at least 6 characters long!",
                capitalLetter: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one capital letter!",
                specialCharacter: (value) =>
                  /[!@#$%^&*]/.test(value) ||
                  "Password must contain at least one special character!",
              },
            })}
          />

          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>
        </div>

        {errors?.password && (
          <span className="text-vivid-red text-sm">
            {errors?.password?.message as ReactNode}
          </span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Confirm Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match!",
            })}
          />

          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>
        </div>

        {errors?.confirmPassword && (
          <span className="text-vivid-red text-sm">
            {errors?.confirmPassword?.message as ReactNode}
          </span>
        )}
      </div>

      <FormSubmit title="Signin" loading={loading} />
    </form>
  );
};

export default SignupFrom;
