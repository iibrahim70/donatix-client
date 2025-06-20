import { ReactNode } from "react";
import {
  Header,
  SidebarFooter,
  SidebarHeader,
  SidebarNavigation,
} from "@/components/shared";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex justify-between">
      <aside className="h-screen max-lg:hidden lg:w-[13%] p-5 bg-midnight-slate flex flex-col justify-between">
        <div className="space-y-8">
          <SidebarHeader />
          <SidebarNavigation />
        </div>

        <SidebarFooter />
      </aside>

      <section className="w-full lg:w-[87%] h-screen bg-black/5">
        <Header />

        <div className="px-10 py-7">{children}</div>
      </section>
    </main>
  );
};

export default DashboardLayout;
