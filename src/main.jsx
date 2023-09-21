import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./Home/Home";
import Error from "./component/Error/Error";
import AppliedJob from "./component/ApplayedJob/AppliedJob";
import Blog from "./component/Blog/Blog";
import StarApplying from "./component/StarApplying/StarApplying";
import JobDetails from "./component/FeaturedJobDeatails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/starApply",
        element: <StarApplying></StarApplying>,
      },
      {
        path: "featuredJob/:paramsId",
        element: <JobDetails></JobDetails>,
        loader: async () => {
          const res = await fetch("../jobs.json");
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
