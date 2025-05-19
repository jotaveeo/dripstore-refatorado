import React, { useState } from "react";
import "./style.css";

export default function CartModal({ cartIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  const cartItems = [
    {
      img: "URL_DA_IMAGEM_DO_TÊNIS", // Substitua pela URL real da imagem
      title: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
    },
    {
      img: "URL_DA_IMAGEM_DO_TÊNIS", // Substitua pela URL real da imagem
      title: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
    },
  ];

  return (
    <div
      className="cart-modal-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cart-icon">
        <img src={cartIcon} alt="Carrinho de Compras" className="cart-image" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
      {isHovered && (
        <div className="cart-modal">
          <h4>Meu Carrinho</h4>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.img}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <button className="view-cart">Ver Carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
}