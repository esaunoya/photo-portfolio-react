import React, { useState, useEffect } from "react";

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
        <div key={gallery.sys.id}>
          <h2>{gallery.fields.galleryTitle}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {gallery.fields.images.map((image) => {
              const filteredImages = images.filter(
                (img) => img.sys.id === image.sys.id
              );
              if (filteredImages.length > 0) {
                return (
                  <img
                    key={filteredImages[0].sys.id}
                    src={filteredImages[0].fields.file.url}
                    alt=""
                    style={{ margin: "0 10px 10px 0" }}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
