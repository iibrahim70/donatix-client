import SmoothScrolling from "@/providers/smooth-scrolling";
import { Footer, Navbar } from "@/components/shared";
import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SmoothScrolling>
      <Navbar />
      {children}
      <Footer />
    </SmoothScrolling>
  );
}
