import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import "./App.css";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

function App() {
  useEffect(() => {
    document.title = "Kevin Admansyah";
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
