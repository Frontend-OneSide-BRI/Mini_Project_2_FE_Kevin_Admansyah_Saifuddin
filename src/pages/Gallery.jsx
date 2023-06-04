import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Parallax from "../components/Parallax";
import Tengah from "../components/Tengah";
import Parallax2 from "../components/Parllax2";
import Footer from "../components/Footer";
import Galleryfilter from "../components/Galleryfilter";
import { GalleryFilter } from "../data";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setData(GalleryFilter);
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = GalleryFilter.filter(item =>
      item.detail.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(results);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <section id="parallax2">
        <Parallax2 handleSearch={handleSearch} searchTerm={searchTerm} />
      </section>

      <section id="galleryfilter">
        <Galleryfilter handleSearch={handleSearch} searchTerm={searchTerm} setData={setData} />
      </section>

      <section id="parallax">
        <Parallax title="Terimakasih Telah Percaya" />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
