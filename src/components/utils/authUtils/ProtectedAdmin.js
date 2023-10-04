import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedAdmin = ({ children }) => {
  const {
    authenticated,
    userInfo: { role },
  } = useSelector((state) => state.user);

  const location = useLocation();
  if (authenticated && role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ path: location.pathname }} />;
};
