import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

function Gallery() {
  const { slug } = useParams();
  const [gallery, setGallery] = useState({
    fields: {
      galleryTitle: "",
      images: [],
    },
  });
  const [images, setImages] = useState([]);

  async function fetchGallery() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    const response = await fetch(url);
    const allData = await response.json();
    const data = Object.values(allData.items).filter(
      (v) => v.fields.slug === slug
    );
    setGallery(data[0]);
  }

  async function fetchImages() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.includes.Asset);
  }

  useEffect(() => {
    fetchGallery();
    fetchImages();
  });

  if (!gallery) {
    return <Navigate to="/notFound" message="Gallery not Found" />;
  }

  return (
    <div>
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
  );
}

export default Gallery;
