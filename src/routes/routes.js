import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import TopRated from "../pages/TopRated";
import Home from "../pages/Home";
import About from "../pages/About";
import Main from "./layout/Main";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "top-rated",
          element: <TopRated />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  export default routes;