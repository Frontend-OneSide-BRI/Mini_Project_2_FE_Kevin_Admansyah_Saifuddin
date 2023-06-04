import React from "react";

export default function Parallax2({ handleSearch, searchTerm }) {
  return (
    <section className="call-to-action text-white text-center relative overflow-hidden">
      <div
        className="parallax absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
        style={{
          backgroundImage: "url('bgpar.jpg')"
        }}
      ></div>

      <div className="container relative z-10 py-28">
        <div className="mx-auto max-w-lg">
          <h2 className="text-4xl mb-4">Find Your Image</h2>
          <input
  type="text"
  className="text-black search-input"
  placeholder="Search..."
  value={searchTerm}
  onChange={handleSearch}
/>
        </div>
      </div>
    </section>
  );
}
