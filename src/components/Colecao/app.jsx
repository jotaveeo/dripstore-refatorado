import React from "react";

import cardImg1 from "../../assets/collection-images/collection-1.png";
import cardImg2 from "../../assets/collection-images/collection-2.png";
import cardImg3 from "../../assets/collection-images/collection-3.png";

import ColecImg1 from "../../assets/svgs/camiseta.svg";
import ColecImg2 from "../../assets/svgs/pants.svg";
import ColecImg3 from "../../assets/svgs/pants-1.svg";
import ColecImg4 from "../../assets/svgs/headphones_1.svg";
import ColecImg5 from "../../assets/svgs/sneakers.svg";

import "./style.css";

export default function Colecao() {
  return (
    <>
      {/* Cards de destaque */}
      <div className="cards-destaque">
        <h2>Coleções em destaque</h2>
        <div className="cards-container">
          <div className="card" style={{ backgroundImage: `url(${cardImg1})` }}>
            <div className="card-tag">30% OFF</div>
            <button className="card-button">Comprar</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${cardImg2})` }}>
            <div className="card-tag">30% OFF</div>
            <button className="card-button">Comprar</button>
          </div>
          <div className="card" style={{ backgroundImage: `url(${cardImg3})` }}>
            <div className="card-tag">30% OFF</div>
            <button className="card-button">Comprar</button>
          </div>
        </div>
      </div>

      {/* COLEÇÃO EM DESTAQUE 2 */}
      <div className="cards-destaque2">
        <h2>Coleções em destaque</h2>
        <div className="cards-container2">
          <div className="card2">
            <button className="icon-button">
              <img src={ColecImg1} alt="Camisetas" />
            </button>
          </div>
          <div className="card2">
            <button className="icon-button">
              <img src={ColecImg2} alt="Calças" />
            </button>
          </div>
          <div className="card2">
            <button className="icon-button">
              <img src={ColecImg3} alt="Bonés" />
            </button>
          </div>
          <div className="card2">
            <button className="icon-button">
              <img src={ColecImg4} alt="Headphones" />
            </button>
          </div>
          <div className="card2">
            <button className="icon-button">
              <img src={ColecImg5} alt="Tênis" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}