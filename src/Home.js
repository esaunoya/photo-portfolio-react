import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  // State for storing fetched images and the index of the current image being displayed
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch the images data from Contentful API
  async function fetchImages() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    const response = await fetch(url);
    const data = await response.json();
    // Shuffle the images before setting them to the state
    setImages(shuffle(data.includes.Asset));
  }

  // Fisher-Yates Shuffle algorithm
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  //Timer to change the background image every x seconds
  useEffect(() => {
    const changeBackground = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    };

    const timer = setInterval(changeBackground, 12500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="slides">
      {images.map((image, index) => (
        <div
          key={image.sys.id}
          className={`slide${index === currentImageIndex ? " visible" : ""}`}
          style={{
            backgroundImage: `url(${image.fields.file.url}?fm=webp&w=2560&h=2560)`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Home;
