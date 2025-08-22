import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RouterLayout>
          <Home />
        </RouterLayout>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <RouterLayout>
          <About />
        </RouterLayout>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <RouterLayout>
          <Contact />
        </RouterLayout>
      </>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <RouterLayout>Privary policy</RouterLayout>
      </>
    ),
  },
]);

function AppWithRouter() {
  return (
    <>
      <div className="test-router">
        <RouterProvider router={router} />
      </div>
      {/* this is called mounting the router */}
    </>
  );
}

function RouterHeader() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

function RouterFooter() {
  return <footer className="mt-auto">Copyright @C</footer>;
}

function RouterLayout(props) {
  return (
    <div className="flex flex-col h-screen">
      <RouterHeader />
      <main className="flex gap-2">
        <div className="p-10 bg-gray-300">
          <Sidebar />{" "}
        </div>
        <div className="w-full block">{props.children}</div>
      </main>
      <RouterFooter />
    </div>
  );
}

export default AppWithRouter;
