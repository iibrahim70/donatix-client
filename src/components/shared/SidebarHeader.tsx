import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export const SidebarHeader = () => {
  return (
    <div className="inline-flex items-center justify-center gap-1.5 w-full text-teal-600 border-b py-5 lg:py-3">
      <HeartHandshake className="size-6" />

      <Link href="/" className="text-xl font-bold">
        Givify
      </Link>
    </div>
  );
};
