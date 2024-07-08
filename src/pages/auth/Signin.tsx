import SigninFrom from "@/components/forms/SigninForm";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <main>
      <div className="min-h-dvh flex items-center justify-center">
        <div className="w-[90%] max-w-lg bg-light-gray dark:bg-shadow-gray shadow-md p-10 rounded-md space-y-8">
          <div className="text-center space-y-3">
            <div className="text-center space-y-3">
              <h3>Signin</h3>
              <p>Sign in to support global causes!</p>
            </div>
          </div>

          <SigninFrom />

          <p>
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-vivid-red font-medium hover:underline underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signin;
