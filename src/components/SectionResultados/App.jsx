import React from "react";
import "./style.css";

export default function SectionResultados({
  title = 'Resultados para "Tênis" - 15 produtos',
}) {
  return (
    <section className="section-container">
      <div className="section-header">
        <p className="section-title">{title}</p>
        <div className="section-order">
          <label className="section-label">Ordenar por:</label>
          <select className="section-select">
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </div>
      </div>
    </section>
  );
}