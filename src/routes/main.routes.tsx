import AboutUs from "@/pages/AboutUs";
import Blogs from "@/pages/Blogs";
import CauseDetails from "@/pages/CauseDetails";
import Causes from "@/pages/Causes";
import ContactUs from "@/pages/ContactUs";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";

const mainPaths = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
  },
  {
    label: "Causes",
    path: "/causes",
    element: <Causes />,
  },
  {
    label: "Causes Details",
    path: "/cause-details/:id",
    element: <CauseDetails />,
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    label: "Blogs",
    path: "/blogs",
    element: <Blogs />,
  },
  {
    label: "Events",
    path: "/events",
    element: <Events />,
  },
  {
    label: "About Us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default mainPaths;
