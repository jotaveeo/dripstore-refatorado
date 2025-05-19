import "./style.css";

export default function Meuspedidos() {
  return (
    <>
      <section className="meus-pedidos">
        <header className="meus-pedidos-header">
          <h1>Meus pedidos</h1>

          <span>STATUS</span>
        </header>
        <ul>
          <li>Meu perfil</li>
          <li className="active-li">Meus pedidos</li>
          <li>Minhas infomações</li>
          <li>Métodos de pagamento</li>
        </ul>
      </section>
    </>
  );
}
