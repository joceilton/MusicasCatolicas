import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from "./components/Pages/Home"
function Home() {
  return <div> Home </div>;
}

function Arq() {
  return <>ownTAN4UubERC-9_shPBCeATNTr1k669ieR1</>;
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ownTAN4UubERC-9_shPBCeATNTr1k669ieR1.html"
            element={<Arq />}
          />
        </Routes>
      </Router>
    </div>
  );
}
