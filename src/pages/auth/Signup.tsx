import SignupFrom from "@/components/forms/SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <div className="min-h-dvh py-10 flex items-center justify-center">
        <div className="w-[90%] max-w-lg bg-light-gray dark:bg-shadow-gray shadow-md p-10 rounded-md space-y-8">
          <div className="text-center space-y-3">
            <h3>Signup</h3>
            <p>Join us to support global causes!</p>
          </div>

          <SignupFrom />

          <p>
            Already Have an Account?{" "}
            <Link
              to="/signin"
              className="text-vivid-red hover:underline underline-offset-4"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
