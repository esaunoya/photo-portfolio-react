import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Gallery from "./Gallery";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gallery/:slug" element={<Gallery />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path="/*" element={<Navigate to="/notFound" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
