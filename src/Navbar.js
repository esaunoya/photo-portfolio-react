import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [galleries, setGalleries] = useState([]);

  async function fetchGalleries() {
    const url = `${process.env.REACT_APP_CONTENTFUL_API}`;
    console.log("Request URL:", url);
    const response = await fetch(url);
    const data = await response.json();
    setGalleries(data.items);
  }
  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Esau Noya - Photos
      </Link>
      <ul>
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
