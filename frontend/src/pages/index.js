import { createBrowserRouter } from "react-router-dom";

import MainPage from "./MainPage";

const routes = [
  {
    path: "*",
    element: <MainPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
