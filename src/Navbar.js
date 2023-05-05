import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  // State to store the list of galleries
  const [galleries, setGalleries] = useState([]);

  // Fetch the gallery data from Contentful API
  async function fetchGalleries() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    console.log("Request URL:", url);
    const response = await fetch(url);
    const data = await response.json();
    setGalleries(data.items);
  }

  // Fetch galleries on component mount
  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <nav className="nav">
      {/* Home link */}
      <Link to="/" className="site-title">
        Esau Noya - Photos
      </Link>
      {/* Gallery links */}
      <ul className="links">
        {galleries.map((gallery) => (
          <li key={gallery.sys.id}>
            <NavLink to={`/gallery/${gallery.fields.slug}`}>
              {gallery.fields.galleryTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
