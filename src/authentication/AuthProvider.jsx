import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userId") || null
  );
  const [userLoading, setUserLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const [customUserRefetch, setCustomUserRefetch] = useState(false);

  //   chekcing if the user is logged in actually
  useEffect(() => {
    const getUser = () => {
      if (userToken) {
        axiosSecure
          .get(`/users?id=${userToken}`)
          .then((res) => {
            setUser(res.data);
            setUserLoading(false);
          })
          .catch((err) => {
            if (err.response.status === 403) {
              logOut();
            }
            setUserLoading(false);
          })
          .finally(() => {
            setUserLoading(false);
          });
      } else {
        setUserLoading(false);
      }
    };

    getUser();

    // eslint-disable-next-line
  }, [customUserRefetch]);

  //   log out function
  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    setUserToken(null);
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
    userToken,
    setUserToken,
    customUserRefetch,
    setCustomUserRefetch
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
