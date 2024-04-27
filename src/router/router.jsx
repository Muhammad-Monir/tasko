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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task/:id",
        element: <SingleTask />,
      },
      {
        path: "/collaborative-task",
        element: <CollaborativeTask></CollaborativeTask>,
      },
      {
        path: "/add-friends",
        element: <AddFriends />,
      },
      {
        path: "/friends-requests",
        element: <FriendsRequests />,
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
