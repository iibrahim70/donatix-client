import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        <span className="flex items-center gap-2">
          <AiOutlineLoading3Quarters className="size-5 animate-spin" />
          Loading...
        </span>
      </section>
    );
  }

  if (userId) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
