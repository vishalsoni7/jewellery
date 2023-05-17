import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./landing/Landing";

function App() {
  return (
    <div className="App">
      <h1> Jewellery App </h1>
      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
