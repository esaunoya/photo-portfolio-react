import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery/:slug" element={<Gallery />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path="/*" element={<Navigate to="/notFound" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
