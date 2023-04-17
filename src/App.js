import React, { useState, useEffect } from "react";

import Gallery from "./Gallery";

function App() {
  const [galleries, setGalleries] = useState([]);
  const [images, setImages] = useState([]);

  console.log(process.env.REACT_APP_CONTENTFUL_API);
  console.log(process.env.REACT_APP_BACKEND);

  async function fetchGalleries() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    console.log("Request URL:", url);
    const response = await fetch(url);
    const data = await response.json();
    setGalleries(data.items);
  }

  async function fetchImages() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.includes.Asset);
  }

  useEffect(() => {
    fetchGalleries();
    fetchImages();
  }, []);

  return (
    <div className="App">
      {galleries.map((gallery) => (
        <Gallery gallery={gallery} images={images} />
      ))}
    </div>
  );
}

export default App;
