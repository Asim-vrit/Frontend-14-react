import { createRoot } from "react-dom/client";
import AppWithRouter from "./AppWithRouter.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <AppWithRouter />
  </>
);
