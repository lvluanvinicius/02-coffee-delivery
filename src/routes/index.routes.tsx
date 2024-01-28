import { RouterProvider } from "react-router-dom";
import { router } from "./create.routes";

export function AppRouters() {
  return <RouterProvider router={router} />;
}
