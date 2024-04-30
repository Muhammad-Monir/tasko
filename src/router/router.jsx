import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import ResetPass from "../pages/Authentication/ResetPass";
import Error from "../pages/Error/Error";
import SingleTask from "../pages/SingleTask/SingleTask";
import CollaborativeTask from "../pages/CollaborativeTask/CollaborativeTask";
import AddFriends from "../pages/AddFriends.jsx/AddFriends";
import FriendsRequests from "../pages/FriendsRequests/FriendsRequests";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/task/:id",
        element: (
          <PrivateRoute>
            <SingleTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/collaborative-task",
        element: (
          <PrivateRoute>
            <CollaborativeTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-friends",
        element: (
          <PrivateRoute>
            <AddFriends />
          </PrivateRoute>
        ),
      },
      {
        path: "/friends-requests",
        element: (
          <PrivateRoute>
            <FriendsRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPass />,
  },
]);

export default router;
