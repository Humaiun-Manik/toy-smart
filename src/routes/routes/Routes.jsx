import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
