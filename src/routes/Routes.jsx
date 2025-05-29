import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import Loading from "../pages/Shared/Loading";
import PrivateRoute from "../contexts/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

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
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply/></PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications/></PrivateRoute>
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