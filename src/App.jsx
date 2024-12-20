import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Thomas from "./Pages/Thomas";
import Michael from "./Pages/Michael";
import Impressum from "./Pages/Impressum";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thomas" element={<Thomas />} />
          <Route path="/michael" element={<Michael />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
