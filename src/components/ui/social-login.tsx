import Link from "next/link";
import { Button } from "./button";
import googleLogo from "@/assets/icons/google.png";
import appleLogo from "@/assets/icons/apple.png";
import Image from "next/image";

const SocialLogin = () => {
  return (
    <div className="space-y-2">
      <div className="space-y-5 pt-5">
        {/* Divider or 'OR' section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-full border-t-2"></div>
          <span className="relative bg-transparent backdrop-blur-xl px-3.5 text-white/70">
            OR
          </span>
        </div>

        <div className="space-y-2.5">
          <Button variant="outline" className="w-full opacity-85">
            <Image src={googleLogo} alt="Google Logo" className="size-5" />
            <span>Sign in with Google</span>
          </Button>

          <Button variant="outline" className="w-full opacity-85">
            <Image src={appleLogo} alt="Google Logo" className="size-[28px]" />
            <span>Sign in with Apple</span>
          </Button>
        </div>
      </div>

      <p>
        Already have an account? {""}
        <Link
          href="/signin"
          className="text-blue-600 hover:text-blue-500 underline underline-offset-4 transition-colors duration-300 font-medium"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SocialLogin;
