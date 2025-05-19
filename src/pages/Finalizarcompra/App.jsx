import React, { useEffect } from "react";
import ResumoCompra from "../../components/ResumoCompra/App";
import FormFinalizar from "../../components/FormFinalizar/App";
import "./style.css";
import Busca from "../../components/Busca";

export default function Finalizarcompra() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Busca />
      <div className="finalizar-compra-container">
        <FormFinalizar />
        <ResumoCompra />
      </div>
    </>
  );
}
