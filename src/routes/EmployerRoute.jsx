import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import useUserProfile from "../hooks/useUserProfile";

const EmployerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { userProfile, isLoading } = useUserProfile();
  const location = useLocation();

  if (user && userProfile?.role === "employer") {
    return children;
  } else if (loading || isLoading) {
    return <Loading />;
  }

  return <Navigate to="/Login" state={{ from: location }} replace={true} />;
};

export default EmployerRoute;
