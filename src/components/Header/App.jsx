import React from "react";
import { NavLink } from "react-router-dom";
import Busca from "../Busca/index";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div>
        <Busca />
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/produtos" activeClassName="active">
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink to="/categorias" activeClassName="active">
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink to="/meuspedidospage" activeClassName="active">
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
