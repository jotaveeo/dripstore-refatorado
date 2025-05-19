import { useEffect, useState } from "react";
import PedidosSolicitados from "../PedidosSolicitados/App.jsx";
import "./style.css";

export default function PedidosSolicitadosCon() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../api/requests.json")
      .then((response) => response.json())

      .then((data) => setProducts(data))

      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  return (
    <div className="product-listing-con">
      {products.map((product) => (
        <PedidosSolicitados key={product.nPedido} product={product} />
      ))}
    </div>
  );
}
