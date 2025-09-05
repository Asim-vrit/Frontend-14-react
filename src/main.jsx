import { createRoot } from "react-dom/client";
import AppWithRouter from "./AppWithRouter.jsx";
import "./index.css";
import UserContextProvider from "./providers/UserContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <UserContextProvider>
      {/* <App /> */}
      <AppWithRouter />
    </UserContextProvider>
  </>
);
