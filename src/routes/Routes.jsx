import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);