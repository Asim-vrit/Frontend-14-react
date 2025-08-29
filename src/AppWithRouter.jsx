import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import Product from "./pages/Product";
import Users from "./pages/Users";
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
    path: "/product",
    element: (
      <>
        <RouterLayout>
          <Product />
        </RouterLayout>
      </>
    ),
  },
  {
    path: "/users",
    element: (
      <>
        <RouterLayout>
          <Users />
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
    <div className=" flex my-2 justify-center gap-2">
      <Link className="border p-2 rounded-2xl" to="/">
        Home
      </Link>
      <Link className="border p-2 rounded-2xl" to="/about">
        About
      </Link>
      <Link className="border p-2 rounded-2xl" to="/contact">
        Contact
      </Link>
      <Link className="border p-2 rounded-2xl" to="/product">
        Product
      </Link>
      <Link className="border p-2 rounded-2xl" to="/users">
        Users
      </Link>
    </div>
  );
}

function RouterFooter() {
  return <footer className="mt-auto flex justify-center">Copyright @C</footer>;
}

function RouterLayout(props) {
  return (
    <div className="flex flex-col h-screen">
      <RouterHeader />
      <main className="flex gap-2">
        {/* <div className="p-10 bg-gray-300">
          <Sidebar />{" "}
        </div> */}
        <div className="px-[10%]">
          <div className="">{props.children}</div>
        </div>
      </main>
      <RouterFooter />
    </div>
  );
}

export default AppWithRouter;
