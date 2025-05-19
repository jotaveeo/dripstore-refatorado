import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/InputFinalizar/App";
import "./style.css";

export default function FormFinalizar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cartao: "",
    validade: "",
    cvv: "",
    nomeCartao: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/compra/finalizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Compra finalizada com sucesso!");
        navigate("/comprafinalizada"); // Redireciona para a página de compra finalizada
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao finalizar a compra");
      }
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error);
      alert("Erro ao finalizar a compra. Por favor, tente novamente.");
    }
    console.log(formData);
  };

  return (
    <div className="form-finalizar-container">
      <form className="form-finalizar" onSubmit={handleSubmit}>
        <div className="form-content">
          <h1>Finalizar Compra</h1>

          <h2>Informações de Pagamento</h2>
          <hr />
          <Input
            htmlFor="cartao"
            text="Número do Cartão *"
            id="cartao"
            type="number"
            placeholder="Insira o número do cartão"
            value={formData.cartao}
            onChange={handleChange}
            required
          />
          <Input
            htmlFor="validade"
            text="Validade *"
            id="validade"
            type="number"
            placeholder="MM/AA"
            value={formData.validade}
            onChange={handleChange}
            required
          />
          <Input
            htmlFor="cvv"
            text="CVV *"
            id="cvv"
            type="number"
            placeholder="Insira o CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
          <Input
            htmlFor="nomeCartao"
            text="Nome no Cartão *"
            id="nomeCartao"
            type="text"
            placeholder="Insira o nome como está no cartão"
            value={formData.nomeCartao}
            onChange={handleChange}
            required
          />

          <div className="button-finalizar">
            <button type="submit">Finalizar Compra</button>
          </div>
        </div>
      </form>
    </div>
  );
}