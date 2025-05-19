import React, { useState, useEffect } from "react";

import fundo from "../../assets/gallery.png";
import imgA from "../../assets/home-images/home-slide-1.jpeg";
import imgB from "../../assets/home-images/home-slide-2.jpeg";
import imgC from "../../assets/home-images/home-slide-3.jpeg";
import imgD from "../../assets/home-images/home-slide-4.jpeg";
import imgE from "../../assets/home-images/home-slide-5.jpeg";
import imgF from "../../assets/home-images/home-slide-6.jpeg";
import imgG from "../../assets/home-images/home-slide-7.jpeg";
import imgH from "../../assets/home-images/home-slide-8.jpeg";

import setaEsquerda from "../../assets/svgs/arrow-left.svg";
import setaDireita from "../../assets/svgs/arrow-right.svg";

import "./style.css";

const imagensCarrosel = [fundo, imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

export default function Gallery({ radius = "4px" }) {
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

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Muda o slide a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="gallery" style={{ width: "100%", height: "100%" }}>
      <button onClick={handlePrev} className="gallery-button">
        <img src={setaEsquerda} alt="Anterior" />
      </button>

      <img
        src={imagensCarrosel[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ borderRadius: radius, width: "100%", height: "100%" }}
      />

      <button onClick={handleNext} className="gallery-button">
        <img src={setaDireita} alt="Próximo" />
      </button>

      <div className="dots">
        {imagensCarrosel.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}