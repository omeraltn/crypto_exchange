import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coin/:id",
        element: <Detail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
