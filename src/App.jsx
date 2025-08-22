import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { SecondaryButton } from "./components/Button";
import { JptButton } from "./components/ui/Button";
import { JptButton as ExternalJptButton } from "./components/Button";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <SecondaryButton />
      <JptButton />
      <ExternalJptButton />
      <Header setCurrentPage={setCurrentPage} />
      <div className="main-container">
        <Sidebar />
        <div style={{ width: "100%" }}>
          {currentPage === "home" && <Home />}
          {currentPage === "about" && <About />}
          {currentPage === "contact" && <Contact />}
        </div>
      </div>
    </>
  );
}

export default App;
