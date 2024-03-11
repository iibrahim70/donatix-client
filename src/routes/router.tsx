import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donations from "@/pages/Donations";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateDonation from "@/pages/CreateDonation";

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
