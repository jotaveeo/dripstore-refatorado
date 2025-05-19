import PropTypes from "prop-types";
import "./style.css";

export default function PedidosSolicitados({ product }) {
  return (
    <>
      <hr className="line-top-product" />
      <div className="pedidos-solicitados-container">
        <section>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>

          <div>
            <span>{product.nPedido}</span>
            <h2>{product.title}</h2>
          </div>
        </section>

        <span className={product.status}>
          {product.status === "transito"
            ? "produto em trânsito"
            : product.status}
        </span>
      </div>
    </>
  );
}

PedidosSolicitados.propTypes = {
  product: PropTypes.shape({
    urlImage: PropTypes.string.isRequired,
    nPedido: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};