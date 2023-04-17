import React from "react";

function Gallery({ gallery, images }) {
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
