import PedidosSolicitadosCon from "../PedidosSolicitadosCon/App.jsx";
import "./style.css";

export default function MeusPedidosContainer() {
  return (
    <>
      <section className="meus-pedidos-container">
        <header className="meus-pedidos-header-container">
          <h1>Meus pedidos</h1>
          <span>STATUS</span>
        </header>
        <PedidosSolicitadosCon />
      </section>
    </>
  );
}