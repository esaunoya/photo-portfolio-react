import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Gallery.css";

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

    // Check if data.includes.Asset exists before setting it to images state
    if (data.includes && data.includes.Asset) {
      setImages(data.includes.Asset);
    } else {
      console.error("Error: Error retrieving assets", data);
      // Set images to an empty array or provide a fallback value
      setImages([]);
    }
  }

  useEffect(() => {
    fetchGallery();
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!gallery) {
    return <Navigate to="/notFound" message="Gallery not Found" />;
  }

  return (
    <div className="gallery">
      {/* <h2 className="galleryTitle">{gallery.fields.galleryTitle}</h2> */}
      <div className="galleryImages">
        {gallery.fields.images.map((image) => {
          const filteredImages = images.filter(
            (img) => img.sys.id === image.sys.id
          );
          if (filteredImages.length > 0) {
            return (
              <img
                className="galleryImage"
                key={filteredImages[0].sys.id}
                src={filteredImages[0].fields.file.url}
                alt=""
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
