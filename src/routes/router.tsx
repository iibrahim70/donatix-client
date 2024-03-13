import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donations from "@/pages/Donations";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateDonation from "@/pages/CreateDonation";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create-donation",
        element: <CreateDonation />,
      },
      {
        path: "donations",
        element: <Donations />,
      },
    ],
  },
]);

export default router;
