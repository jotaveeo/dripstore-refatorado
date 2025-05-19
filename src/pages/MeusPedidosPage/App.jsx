import Layout from "../../components/Layout/App";
import MeusPedidosContainer from "../../components/MeusPedidosContainer/App.jsx";
import MeusPedidosPrincipal from "../../components/MeusPedidosPrincipal/App.jsx";
import "./style.css";

export default function MeusPedidosPage() {
  return (
    <Layout>
      <div className="meus-pedidos-page-content">
        <MeusPedidosPrincipal />
        <MeusPedidosContainer />
      </div>
    </Layout>
  );
}