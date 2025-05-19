import { Link } from "react-router-dom";
import "./style.css";
import Layout from "../../components/Layout/App";

const categorias = [
  "Eletrônicos",
  "Roupas",
  "Livros",
  "Móveis",
  "Brinquedos",
  "Esportes",
  "Beleza",
  "Automóveis",
];

export default function CategoriasPage() {
  return (
    <Layout>
      <div className="categorias-container">
        <h1>Categorias</h1>
        <ul className="categorias-list">
          {categorias.map((categoria, index) => (
            <li key={index} className="categoria-item">
              <Link to={`/categoria/${categoria.toLowerCase()}`} className="categoria-link">
                {categoria}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}