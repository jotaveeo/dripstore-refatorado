import React from "react";
import "./style.css";
import ProductCard from "../../components/ProductCard/App";

export default function ProductListing({
  products,
  columns = 4,
  rows = "auto",
}) {
  return (
    <div
      className="product-listing"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          img={product.img.path}
          descontooff={product.desconto_off}
          title={product.nome}
          nomeProduto={product.slug}
          preco={product.preco}
          precoDesconto={product.preco_desconto}
        />
      ))}
    </div>
  );
}
