import PropTypes from "prop-types";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import WebPreLoader from "../components/Loader/WebPreLoader";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuthContext();

  console.log(userLoading);

  if (userLoading) {
    return <WebPreLoader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
