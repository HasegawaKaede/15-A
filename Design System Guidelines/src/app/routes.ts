import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import News from "./pages/News";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "news", Component: News },
      { path: "menu", Component: Menu },
      { path: "store", Component: Store },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
