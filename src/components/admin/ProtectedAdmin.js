import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedAdmin = ({ children }) => {
  const { authenticated } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.user.userInfo);
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  if (authenticated && role === "admin") {
    return children;
  }
  return <Navigate to="/" />;
};
