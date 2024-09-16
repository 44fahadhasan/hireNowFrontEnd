import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import JobPublish from "../pages/employersPages/JobPublish";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import JobDeatilsPage from "../pages/JobDeatilsPage/JobDeatilsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
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
        path: "Job-Details",
        element: <JobDeatilsPage />,
      },

      // secure & employer routes
      {
        path: "Publish-Job",
        element: (
          <SecureRoute>
            <EmployerRoute>
              <JobPublish />
            </EmployerRoute>
          </SecureRoute>
        ),
      },
    ],
  },
]);

export default routes;
