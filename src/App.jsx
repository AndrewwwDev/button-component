import Buttons from "./components/buttons.jsx";
import Aside from "./components/aside.jsx";
// import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <Aside />
      <Buttons />
    </div>
  );
}

export default App;
