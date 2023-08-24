import { useContext, useCallback, memo } from "react";
import AuthContext from "./AuthProvider";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  const showAccessDeniedModel = useCallback(() => {
    alert("Unauthorized User, Access Denied");
    return <Navigate to="/" state={{ from: location }} replace />;
  }, [location, auth]);
  const showLoginModel = useCallback(() => {
    alert("Unauthorized User, Please Login First");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }, [location, auth]);

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    showAccessDeniedModel()
  ) : (
    showLoginModel()
  );
};

export default memo(RequireAuth);
