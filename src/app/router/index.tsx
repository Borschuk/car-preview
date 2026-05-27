import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Configurator from "../pages/Configurator";
import Contact from "../pages/Contact";
import Finance from "../pages/Finance";
import Gallery from "../pages/Gallery";
import Root from "./layouts/root";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/finance", element: <Finance /> },
      { path: "/contact", element: <Contact /> },
      { path: "/configurator", element: <Configurator /> },
      { path: "/configurator/:id", element: <Configurator /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
