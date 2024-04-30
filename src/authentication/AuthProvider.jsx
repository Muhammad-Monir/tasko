import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const userid = localStorage.getItem("userId");
  //   chekcing if the user is logged in actually
  useEffect(() => {
    const getUser = () => {
      if (userid) {
        axiosSecure
          .get(`/users?id=${userid}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch(() => {})
          .finally(() => {
            setUserLoading(false);
          });
      } else {
        setUserLoading(false);
        logOut();
      }
    };

    return () => getUser();

    // eslint-disable-next-line
  }, [userid]);

  //   log out function
  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    setUser(null);
    setUserLoading(false);

    toast.success("Logged Out");
  };

  const data = {
    user,
    setUser,
    setUserLoading,
    userLoading,
    logOut,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
