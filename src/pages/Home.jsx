import React from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Parallax from "../components/Parallax";
import Tengah from "../components/Tengah";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <section id="navbar">
        <Navbar />
      </section>
      <section id="carousel">
        <Carousel />
      </section>

    <section id="parallax">
  <Parallax title="Jelajahi Dunia di Ujung Layar" button={<Link to="/gallery">Lihat Gallery</Link>} />
</section>

      <section id="tengah">
        <Tengah />
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

export default Home;
