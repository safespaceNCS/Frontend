import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authcontext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
console.log(user)
  if (!user ||!allowedRoles.includes(user.role)) {
    return <Navigate to="/error" />;
  }


  return <Outlet />;
};

export default ProtectedRoute;
