import { ReactNode } from "react";
import {
  Header,
  SidebarFooter,
  SidebarHeader,
  SidebarNavigation,
} from "@/components/shared";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-screen w-screen">
      <aside className="max-lg:hidden w-[14%] bg-midnight-slate flex flex-col justify-between">
        <div className="space-y-7 px-5 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-black/50 scrollbar-track-transparent">
          <SidebarHeader />
          <SidebarNavigation />
        </div>

        <div className="px-5 pb-5">
          <SidebarFooter />
        </div>
      </aside>

      <section className="w-full lg:w-[86%] bg-black/5 flex flex-col h-full overflow-y-auto">
        <Header />
        <div className="px-10 py-7 flex-1 overflow-y-auto">{children}</div>
      </section>
    </main>
  );
};

export default DashboardLayout;
