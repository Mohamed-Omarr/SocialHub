import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/public/landing/Index";
import PublicLayout from "./layouts/PublicLayout/Index";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
