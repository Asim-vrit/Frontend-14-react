import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
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
