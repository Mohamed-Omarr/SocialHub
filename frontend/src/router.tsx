import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/public/landing/Index";
import PublicLayout from "./layouts/PublicLayout/Index";
import Signin from "./pages/public/auth/Signin";
import Signup from "./pages/public/auth/Signup";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        children: [
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);
