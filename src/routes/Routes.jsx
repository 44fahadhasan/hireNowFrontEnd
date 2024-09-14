import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

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
    ],
  },
]);

export default routes;
