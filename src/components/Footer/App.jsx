import React from "react";
import Logo from "../Logofooter/App";
import facebookLogo from "../../assets/svgs/facebook.svg";
import instagramLogo from "../../assets/svgs/instagram.svg";
import twitterLogo from "../../assets/svgs/twitter.svg";
import "./style.css";

const informations = [
  { text: "Sobre Drip Store", link: "/about" },
  { text: "Segurança", link: "/security" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/work" },
  { text: "Meus Pedidos", link: "/orders" },
];

const categories = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Logo Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Logo Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Logo Twitter" />
          </a>
        </div>
      </div>

      <div className="footer-categories">
        <h3>Informações</h3>
        <ul>
          {informations.map((info, index) => (
            <li key={index}>
              <a href={info.link}>{info.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-categories">
        <h3>Categorias</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contato</h3>
        <p>
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </p>
        <p>(85) 3051-3411</p>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2024 Digital Store</p>
      </div>
    </footer>
  );
}