import React from "react";
import { Route, Routes } from "react-router-dom";

import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gallery/:slug" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
