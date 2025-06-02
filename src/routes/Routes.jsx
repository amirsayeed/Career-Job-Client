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
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
          loader: ({params})=> fetch(`https://career-job-server.vercel.app/jobs/${params.id}`),
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
          path: 'addJob',
          element: <PrivateRoute><AddJob/></PrivateRoute>
        },
        {
          path: 'myPostedJobs',
          element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
        },
        {
          path: 'applications/:job_id',
          element: <PrivateRoute><ViewApplications/></PrivateRoute>,
          loader: ({params}) => fetch(`https://career-job-server.vercel.app/applications/job/${params.job_id}`),
          hydrateFallbackElement: <Loading/>
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