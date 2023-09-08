import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../pages/notFound/NotFound";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ResetPassword from "../../pages/resetPassword/ResetPassword";
import Contact from "../../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset",
        element: <ResetPassword />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
