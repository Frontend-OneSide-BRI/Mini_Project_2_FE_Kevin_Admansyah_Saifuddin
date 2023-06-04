import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "1.jpg", desc: "Akses Kapan Saja" },
    { src: "2.jpg", desc: "Jelajahi Dunia di Ujung Layar" },
    { src: "3.jpg", desc: "Abadikan Momen Anda" },
  ];

  const goToPreviousSlide = () => {
    const lastIndex = slides.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const lastIndex = slides.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      goToNextSlide();
    }, 2000);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  return (
<div className="carousel relative sm:h-62 md:h-62" style={{ maxWidth: "100%", overflow: "hidden" }}>
      
      <div className="carousel-content relative h-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-container flex-shrink-0 relative" style={{ width: "100%" }}>
            <img src={slide.src} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <p className="absolute bottom-20 bg-black bg-opacity-50 text-white w-50% p-3">{slide.desc}</p>
            <div className="carousel-navigator absolute bottom-5 w-full flex justify-center">
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-7 h-1 ${index === currentIndex ? "bg-blue-500" : ""}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button className="w-7 h-7 text-white" onClick={goToPreviousSlide}>
          <BsArrowLeft />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button className="w-7 h-7 text-white" onClick={goToNextSlide}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
