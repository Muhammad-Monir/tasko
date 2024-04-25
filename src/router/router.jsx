import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import ResetPass from "../pages/Authentication/ResetPass";
import Error from "../pages/Error/Error";
import SingleTask from "../pages/SingleTask/SingleTask";
import CollaborativeTask from "../pages/CollaborativeTask/CollaborativeTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: <CollaborativeTask />,
      },
    ],
    errorElement: <Error />,
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
