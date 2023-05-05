import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  // Get the slug parameter from the URL
  const { slug } = useParams();

  // Initialize state for gallery and images
  const [gallery, setGallery] = useState({
    fields: {
      galleryTitle: "",
      images: [],
    },
  });
  const [images, setImages] = useState([]);

  // Fetch the gallery data from Contentful API
  async function fetchGallery() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    const response = await fetch(url);
    const allData = await response.json();
    const data = Object.values(allData.items).filter(
      (v) => v.fields.slug === slug
    );
    setGallery(data[0]);
  }

  // Fetch the images data from Contentful API
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

  // Fetch gallery and images data when the slug parameter changes
  useEffect(() => {
    fetchGallery();
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Navigate to notFound page if gallery is not available
  if (!gallery) {
    return <Navigate to="/notFound" message="Gallery not Found" />;
  }

  return (
    <div className="gallery">
      {/* <h2 className="galleryTitle">{gallery.fields.galleryTitle}</h2> */}
      <div className="galleryImages">
        {gallery.fields.images.map((image) => {
          const filteredImages = images.filter(
            // Find the image object in images state by matching id
            (img) => img.sys.id === image.sys.id
          );
          if (filteredImages.length > 0) {
            // Render image with resized dimensions and in WebP format
            return (
              <img
                className="galleryImage"
                key={filteredImages[0].sys.id}
                src={filteredImages[0].fields.file.url + `?fm=webp&h=1080`}
                alt=""
              />
            );
          } else {
            // If image not found, render nothing
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Gallery;
