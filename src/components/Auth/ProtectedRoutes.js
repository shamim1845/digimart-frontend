import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { authenticated } = useSelector((state) => state.user);
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
