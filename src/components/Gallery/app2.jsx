import React, { useState } from "react";

import imgA from "../../assets/home-images/home-slide-1.jpeg";
import imgB from "../../assets/home-images/home-slide-2.jpeg";
import imgC from "../../assets/home-images/home-slide-3.jpeg";

import setaEsquerda from "../../assets/svgs/arrow-left.svg";
import setaDireita from "../../assets/svgs/arrow-right.svg";

import "./style2.css";

const imagensCarrosel = [imgA, imgB, imgC];

export default function Gallery2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagensCarrosel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagensCarrosel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        <button onClick={handlePrev} className="gallery-button">
          <img src={setaEsquerda} alt="Anterior" />
        </button>

        <img
          src={imagensCarrosel[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="gallery-image"
        />

        <button onClick={handleNext} className="gallery-button">
          <img src={setaDireita} alt="Próximo" />
        </button>
      </div>

      {/* Thumbs */}
      <div className="gallery-thumbs">
        {imagensCarrosel.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index + 1}`}
            className={`thumb ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
