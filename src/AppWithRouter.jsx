import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function AppWithRouter() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>

      <RouterProvider router={router} />
    </>
  );
}

export default AppWithRouter;
