import { NavLink } from "react-router-dom";
import "./style.css";

export default function ProductCard({
  img,
  descontooff,
  title,
  nomeProduto,
  preco,
  precoDesconto,
}) {
  return (
    <article className="product-card">
      <figure className="product-card-img-container">
        <NavLink to="/produtos/detalhes">
          <img src={img} alt={nomeProduto} className="product-card-img" />
        </NavLink>
        {descontooff && (
          <div className="product-card-off">
            <p>{descontooff}</p>
          </div>
        )}
      </figure>
      <section className="product-card-details">
        <h4>{title}</h4>
        <h5>{nomeProduto}</h5>
        <div className="product-card-price">
          <p
            className={`product-card-preco ${precoDesconto ? "desconto" : ""}`}
          >
            R${preco}
          </p>
          {precoDesconto && (
            <p className="product-card-preco-desconto">R${precoDesconto}</p>
          )}
        </div>
      </section>
    </article>
  );
}
