import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export const SidebarHeader = () => {
  return (
    <div className="inline-flex items-center justify-center gap-1.5 w-full py-5 lg:py-3 border-b">
      <HeartHandshake className="size-6 text-teal-600" />

      <Link href="/" className="text-xl font-bold">
        Givify
      </Link>
    </div>
  );
};
