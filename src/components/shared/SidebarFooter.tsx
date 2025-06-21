import { LogOut } from "lucide-react";
import { Avatar, Button } from "../ui";
import Image from "next/image";

export const SidebarFooter = () => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center gap-2.5">
        <Avatar className="size-12">
          <Image
            src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User Image"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </Avatar>

        <div>
          <p className="text-white/90 font-medium">Ibrahim Khalil</p>
          <p>Admin</p>
        </div>
      </div>

      <Button variant="ghost" className="w-full">
        <LogOut className="size-4" />
        <p>Log Out</p>
      </Button>
    </div>
  );
};
