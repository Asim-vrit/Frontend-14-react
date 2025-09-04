import { useContext, useState } from "react";
import { createBrowserRouter, Link, Navigate, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Users from "./pages/Users";
import Login from "./pages/login";
import { UserContext } from "./context/UserContext";

const token = localStorage.getItem("token");
const userLocal = localStorage.getItem("user");

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    children: [
      {
        element: <Protected />,
        children: [
          {
            path: "/about",
            element: (
              <>
                <About />
              </>
            ),
          },
          {
            path: "/contact",
            element: (
              <>
                <Contact />
              </>
            ),
          },
        ],
      },
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },

      {
        path: "/product",
        element: (
          <>
            <Product />
          </>
        ),
      },
      {
        path: "/users",
        element: (
          <>
            <Users />
          </>
        ),
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <>Privary policy</>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function AppWithRouter() {
  const [user, setUser] = useState({
    isLogin: !!token,
    userDetails: userLocal ? JSON.parse(userLocal) : {},
    token: token,
  });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div className="test-router">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

function RouterHeader() {
  const userContext = useContext(UserContext);

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
      <button
        className="border rounded-2xl border-red-500 p-2 text-red-600"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.remove("user");
          userContext.setUser({ isLogin: false, userDetails: {}, token: "" });
        }}
      >
        Logout
      </button>
    </div>
  );
}

function RouterFooter() {
  return <footer className="mt-auto flex justify-center">Copyright @C</footer>;
}

function RouterLayout() {
  return (
    <div className="flex flex-col h-screen">
      <RouterHeader />
      <main className="flex gap-2">
        <div className="px-[10%]">
          <div className="">
            <Outlet />
          </div>
        </div>
      </main>
      <RouterFooter />
    </div>
  );
}

function Protected() {
  const userContext = useContext(UserContext);
  if (!userContext.user.isLogin) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

export default AppWithRouter;
