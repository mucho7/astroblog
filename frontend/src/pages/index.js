import { createBrowserRouter } from "react-router-dom"

import MainPage from "./MainPage"
import ProjectPage from "./ProjectPage"

const routes = [
  {
    path: "/project/*",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <MainPage />,
  },
]

const router = createBrowserRouter(routes)

export default router
