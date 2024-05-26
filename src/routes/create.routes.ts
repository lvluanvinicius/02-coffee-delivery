import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layout/Default";
import { Menu } from "../pages/Menu";
import { Cart } from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    children: [
      {
        path: "",
        Component: Menu,
      },
      {
        path: "cart/",
        Component: Cart,
      },
    ],
  },
]);

export { router };
