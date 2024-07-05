import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <main className="bg-pure-white text-midnight-slate dark:bg-dark-charcoal dark:text-pale-silver">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
