import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import Loading from "../pages/Shared/Loading";

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
          path: '/jobs/:id',
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          Component: JobDetails
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