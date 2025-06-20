import Link from "next/link";
import { SidebarAccordion } from "./SidebarAccordion";
import { Avatar } from "../ui";
import { BlurredImage } from "./BlurredImage";

export const Sidebar = () => {
  return (
    <aside className="h-screen max-lg:hidden lg:w-[13%] p-5 bg-midnight-slate flex flex-col justify-between">
      <div className="space-y-8">
        <Link href="/" className="block text-xl font-semibold text-center">
          Givify
        </Link>

        <SidebarAccordion />
      </div>

      <div className="pt-5 border-t space-y-1.5">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-12">
            <BlurredImage
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Image"
              className="h-full w-full object-cover"
            />
          </Avatar>

          <div>
            <p className="text-white/90 font-medium">Ibrahim Khalil</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
