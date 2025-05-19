import Laye from "../../assets/svgs/laye.svg";
import "./style.css";

export default function ProdutoLaye() {
  return (
    <article className="produto-laye">
      <div className="oferta">
        <img src={Laye} alt="tenis" />
      </div>

      <div className="informacoes">
        <table className="laye-table">
          <thead>
            <tr>
              <th colSpan="2">
                <strong>Oferta especial</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <h1 className="h1-produtolaye">
                  Air Jordan edição de colecionador
                </h1>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque doloribus nulla sapiente. Ducimus distinctio quis
                  ipsum aperiam accusamus tenetur doloribus?
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <button>
                  <a href="#">Ver Oferta</a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}