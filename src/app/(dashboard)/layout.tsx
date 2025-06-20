import { ReactNode } from "react";
import { Sidebar } from "@/components/shared";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex justify-between">
      <Sidebar />

      <section className="w-full lg:w-[87%] h-screen p-10 bg-black/5">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
