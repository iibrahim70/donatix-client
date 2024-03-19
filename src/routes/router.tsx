import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donations from "@/pages/Donations";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateDonation from "@/pages/CreateDonation";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "@/pages/DonationDetails";
import axios from "axios";
import Dashboard from "@/pages/Dashboard";
import Leaderboard from "@/pages/Leaderboard";
import AboutUs from "@/pages/AboutUs";
import Volunteer from "@/pages/Volunteer";
import CreateTestimonial from "@/pages/CreateTestimonial";

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
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
        loader: async ({ params }) => {
          try {
            const res = await axios.get(
              `https://givers-heaven-server.vercel.app/api/v1/donations/${params.id}`
            );
            return res.data?.data;
          } catch (error) {
            console.error("Error fetching donation details:", error);
            return null;
          }
        },
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/volunteer",
        element: (
          <PrivateRoute>
            <Volunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
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
]);

export default router;
