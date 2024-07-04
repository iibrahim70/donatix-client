import FormSubmit from "@/components/forms/FormSubmit";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [loading, setIsLoading] = useState<boolean>(false);

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
    <main>
      <div className="max-md:py-10 w-[90%] max-w-lg mx-auto flex items-center justify-center min-h-[calc(100dvh-64px)]">
        <div className="h-full w-full shadow-md p-10 dark:bg-light-black rounded-md space-y-10">
          <div className="text-center space-y-3">
            <h3>Signup</h3>
            <p>Support relief efforts worldwide, sign up now!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1">
              <label>User Name</label>
              <Input
                type="text"
                {...register("userName", { required: true })}
              />
              {errors?.userName && (
                <span className="text-red-500 text-sm">
                  User Name is required
                </span>
              )}
            </div>

            <div className="space-y-1">
              <label>Phone Number</label>
              <Input
                type="number"
                {...register("phoneNumber", { required: true })}
              />
              {errors?.phoneNumber && (
                <span className="text-red-500 text-sm">
                  Phone Number is required
                </span>
              )}
            </div>

            <div className="space-y-1">
              <label>Email</label>
              <Input type="email" {...register("email", { required: true })} />
              {errors?.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            <div className="space-y-1">
              <label>Password</label>
              <Input
                type="password"
                {...register("password", { required: true })}
              />
              {errors?.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>

            <p>
              Already Have an Account?{" "}
              <Link
                to="/signin"
                className="text-blue-500 hover:underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>

            <FormSubmit title="Signup" loading={loading} />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
