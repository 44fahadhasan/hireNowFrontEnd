import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const SecureRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  } else if (loading) {
    return <Loading />;
  }

  return <Navigate to="/Login" state={{ from: location }} replace={true} />;
};

export default SecureRoute;
