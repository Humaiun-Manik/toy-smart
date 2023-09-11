import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../pages/notFound/NotFound";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ResetPassword from "../../pages/resetPassword/ResetPassword";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import AllProduct from "../../pages/allProduct/AllProduct";

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
        path: "products",
        element: <AllProduct />,
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
        path: "about",
        element: <About />,
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
