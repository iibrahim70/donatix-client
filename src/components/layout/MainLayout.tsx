import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <main className="bg-deep-white dark:bg-deep-black dark:text-deep-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
