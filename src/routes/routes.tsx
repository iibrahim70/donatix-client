import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Donations from "@/pages/Causes";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateDonation from "@/pages/CreateDonation";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "@/pages/Dashboard";
import CreateTestimonial from "@/pages/CreateTestimonial";
import routeGenerator from "@/helpers/routeGenerator";
import mainPaths from "./main.routes";

const router = createBrowserRouter([
  // main routes
  {
    path: "/",
    element: <App />,
    children: routeGenerator(mainPaths),
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-donation",
        element: <CreateDonation />,
      },
      {
        path: "donations",
        element: <Donations />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },

  // auth routes
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
