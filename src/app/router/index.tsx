/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router";
import Root from "./layouts/root";
import Loading from "../components/loading";

const Home = lazy(() => import("../pages/Home"));
const Configurator = lazy(() => import("../pages/Configurator"));
const Contact = lazy(() => import("../pages/Contact"));
const Finance = lazy(() => import("../pages/Finance"));
const Gallery = lazy(() => import("../pages/Gallery"));
const NotFound = lazy(() => import("../pages/NotFound"));

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<Loading />}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: "/", element: withSuspense(<Home />) },
      { path: "/gallery", element: withSuspense(<Gallery />) },
      { path: "/finance", element: withSuspense(<Finance />) },
      { path: "/contact", element: withSuspense(<Contact />) },
      { path: "/configurator", element: withSuspense(<Configurator />) },
      { path: "/configurator/:id", element: withSuspense(<Configurator />) },
    ],
  },
  {
    path: "*",
    element: withSuspense(<NotFound />),
  },
]);

export default router;
