import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import Applications from "../pages/admin/Applications";
import DashboardHome from "../pages/admin/DashboardHome";
import JobListings from "../pages/admin/JobListings";
import Users from "../pages/admin/Users";
import AllApplicantApplication from "../pages/employersPages/AllApplicantApplication";
import ApplicantInfo from "../pages/employersPages/ApplicantInfo";
import BuyPost from "../pages/employersPages/BuyPost";
import JobPost from "../pages/employersPages/JobPost";
import PostedJobs from "../pages/employersPages/PostedJobs";
import UpdateJobPost from "../pages/employersPages/UpdateJobPost";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import JobDeatilsPage from "../pages/JobDeatilsPage/JobDeatilsPage";
import MyApplications from "../pages/jobSeeker/MyApplications";
import Resume from "../pages/jobSeeker/Resume";
import ReviewAplication from "../pages/jobSeeker/ReviewAplication";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminRoute from "./AdminRoute";
import EmployerRoute from "./EmployerRoute";
import SecureRoute from "./SecureRoute";

const routes = createBrowserRouter([
  // root layout routes
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // user public routes
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Job-Details/:id",
        element: <JobDeatilsPage />,
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_API_URL}/jobs/${params?.id}`);
        },
      },

      // secure job seeker routes
      {
        path: "My-Applications",
        element: (
          <SecureRoute>
            <MyApplications />
          </SecureRoute>
        ),
      },
      {
        path: "Resume",
        element: (
          <SecureRoute>
            <Resume />
          </SecureRoute>
        ),
      },
      {
        path: "Review-Aplication/:id",
        element: (
          <SecureRoute>
            <ReviewAplication />
          </SecureRoute>
        ),
      },

      // secure & employer routes
      {
        path: "Job-Post",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <JobPost />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Update-Job-Post/:id",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <UpdateJobPost />
            </EmployerRoute>
          </SecureRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_API_URL}/jobs/${params?.id}`);
        },
      },
      {
        path: "Buy-Post",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <BuyPost />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Posted-Jobs",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <PostedJobs />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Applicant-Applications",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <AllApplicantApplication />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Applicant-Info/:id",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <ApplicantInfo />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
    ],
  },

  // dashboard layout routes
  {
    path: "Dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <SecureRoute>
            <AdminRoute>
              <DashboardHome />
            </AdminRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Users",
        element: (
          <SecureRoute>
            <AdminRoute>
              <Users />
            </AdminRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Job-Listings",
        element: (
          <SecureRoute>
            <AdminRoute>
              <JobListings />
            </AdminRoute>
          </SecureRoute>
        ),
      },
      {
        path: "Applications",
        element: (
          <SecureRoute>
            <AdminRoute>
              <Applications />
            </AdminRoute>
          </SecureRoute>
        ),
      },
    ],
  },
]);

export default routes;
