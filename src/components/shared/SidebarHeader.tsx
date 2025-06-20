import Link from "next/link";

export const SidebarHeader = () => {
  return (
    <div className="space-y-8">
      <Link href="/" className="block text-xl font-semibold text-center">
        Givify
      </Link>
    </div>
  );
};
