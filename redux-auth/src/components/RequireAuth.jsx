import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { selectCurrentAuth } from "../features/authSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { memo, useRef } from "react";
import AlertModel from "./AlertModel";

const RequireAuth = ({ allowedRoles }) => {
  const { accessToken, roles } = useSelector(selectCurrentAuth);
  const navigate = useNavigate();
  const location = useLocation();
  let modelRef = useRef();

  return roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : accessToken ? (
    <AlertModel
      title="Access Denied"
      desciption="You do not have access to this resource"
      actions={[
        {
          buttonName: "OK",
          onClickFunc: () => {
            modelRef.current.closeModel();
            navigate("/", { replace: true, state: { from: location } });
          },
        },
      ]}
      ref={modelRef}
    />
  ) : (
    <AlertModel
      title="Unauthorized User"
      desciption="Please Login First"
      actions={[
        {
          buttonName: "OK",
          onClickFunc: () => {
            modelRef.current.closeModel();
            navigate("/login", { replace: true, state: { from: location } });
          },
        },
      ]}
      ref={modelRef}
    />
  );
};

export default memo(RequireAuth);
