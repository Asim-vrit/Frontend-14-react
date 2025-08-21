import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  const [apple, setApple] = useState(5);
  function updateState() {
    setApple(apple + 1);
  }
  console.log("i am running", apple);
  return (
    <>
      <Header />
      <button onClick={updateState}>Click me {apple}</button>
      <div className="main-container">
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
}

export default App;
