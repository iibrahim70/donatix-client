import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <main className="bg-deep-white dark:bg-deep-black dark:text-deep-white">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
