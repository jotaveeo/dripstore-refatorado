import React from "react";
import "./style.css";

export default function FilterGroup() {
  return (
    <div className="filter-group">
      <h1 className="filter-title">Filtrar por</h1>
      <hr />
      <div className="filter-section">
        <h3>Marca</h3>
        <ul>
          <li>
            <input type="checkbox" id="adidas" />
            <label htmlFor="adidas">Adidas</label>
          </li>
          <li>
            <input type="checkbox" id="balenciaga" />
            <label htmlFor="balenciaga">Balenciaga</label>
          </li>
          <li>
            <input type="checkbox" id="kswiss" />
            <label htmlFor="kswiss">K-Swiss</label>
          </li>
          <li>
            <input type="checkbox" id="nike" />
            <label htmlFor="nike">Nike</label>
          </li>
          <li>
            <input type="checkbox" id="puma" />
            <label htmlFor="puma">Puma</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Categoria</h3>
        <ul>
          <li>
            <input type="checkbox" id="esporte" />
            <label htmlFor="esporte">Esporte e lazer</label>
          </li>
          <li>
            <input type="checkbox" id="casual" />
            <label htmlFor="casual">Casual</label>
          </li>
          <li>
            <input type="checkbox" id="utilitario" />
            <label htmlFor="utilitario">Utilitário</label>
          </li>
          <li>
            <input type="checkbox" id="corrida" />
            <label htmlFor="corrida">Corrida</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Gênero</h3>
        <ul>
          <li>
            <input type="checkbox" id="masculino" />
            <label htmlFor="masculino">Masculino</label>
          </li>
          <li>
            <input type="checkbox" id="feminino" />
            <label htmlFor="feminino">Feminino</label>
          </li>
          <li>
            <input type="checkbox" id="unisex" />
            <label htmlFor="unisex">Unisex</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Estado</h3>
        <ul>
          <li>
            <input type="radio" name="estado" id="novo" />
            <label htmlFor="novo">Novo</label>
          </li>
          <li>
            <input type="radio" name="estado" id="usado" />
            <label htmlFor="usado">Usado</label>
          </li>
        </ul>
      </div>
    </div>
  );
}