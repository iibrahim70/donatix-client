import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "../ui/input";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Label } from "../ui/label";
import FormSubmit from "./FormSubmit";

const SigninFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://givers-heaven-server.vercel.app/api/v1/users/login",
        data
      );

      if (res?.data?.success === true) {
        navigate(from, { replace: true });
        const userId = res?.data?.data?.user?._id;
        localStorage.setItem("userId", userId);
        setIsLoading(false);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signin successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to signin. Please try again later.");
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
        <Label className="font-medium">Email</Label>
        <Input
          type="email"
          {...register("email", { required: true })}
        />
        {errors?.email && (
          <span className="text-vivid-red text-sm">Enter a valid Email</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
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
          <span className="text-vivid-red text-sm">Enter a valid Password</span>
        )}
      </div>

      <FormSubmit title="Signin" loading={loading} />
    </form>
  );
};

export default SigninFrom;
