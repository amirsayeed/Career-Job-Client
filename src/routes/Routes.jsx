import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'register',
            Component: Register
        },
        {
            path: 'signIn',
            Component: SignIn
        }
    ]
  },
]);