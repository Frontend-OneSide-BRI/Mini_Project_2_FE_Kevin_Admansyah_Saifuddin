import React from "react";

export default function Parallax({ title, button }) {
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
          <h2 className="text-4xl mb-4">{title}</h2>
          {button && (
  <button className="custombutton hover:glow-blue">{button}</button>
)}
        </div>
      </div>
    </section>
  );
}
