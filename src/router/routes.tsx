import Layout from "@/components/layout";
import Counter from "@/pages/Counter";
import { createBrowserRouter as Router } from "react-router-dom";

export const routes = Router([
  {
    path: "*",
    element: <div>Page not found</div>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Home page</div>,
      },
      {
        path: "/about",
        element: (
          <div>about page go back to couter page to see data presists</div>
        ),
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);
