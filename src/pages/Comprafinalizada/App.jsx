import img from "../../assets/tenis.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/App";
import "./style.css";

export default function Comprafinalizada() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
  });

  useEffect(() => {
    // Função para buscar os dados do usuário do backend
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage
      if (!userId) {
        console.error("ID do usuário não encontrado no localStorage");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`);
        const data = await response.json();

        setUserInfo({
          nome: data.nome,
          cpf: data.cpf,
          email: data.email,
          celular: data.celular,
          endereco: data.endereco,
          bairro: data.bairro,
          cidade: data.cidade,
          cep: data.cep,
          complemento: data.complemento,
        });
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Layout>
        <div className="compra-concluida-container">
          <div className="compra-concluida-card">
            <h2 className="compra-concluida-title">
              🎉 Compra Realizada com sucesso!
            </h2>

            {/* Informações Pessoais */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Informações Pessoais
              </h3>
              <div className="compra-concluida-info-group">
                <p>
                  <strong>Nome:</strong> {userInfo.nome}
                </p>
                <p>
                  <strong>CPF:</strong> {userInfo.cpf}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Celular:</strong> {userInfo.celular}
                </p>
              </div>
            </section>

            {/* Informações de Entrega */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Informações de Entrega
              </h3>
              <div className="compra-concluida-info-group">
                <p>
                  <strong>Endereço:</strong> {userInfo.endereco}
                </p>
                <p>
                  <strong>Bairro:</strong> {userInfo.bairro}
                </p>
                <p>
                  <strong>Cidade:</strong> {userInfo.cidade}
                </p>
                <p>
                  <strong>CEP:</strong> {userInfo.cep}
                </p>
                {userInfo.complemento && (
                  <p>
                    <strong>Complemento:</strong> {userInfo.complemento}
                  </p>
                )}
              </div>
            </section>

            {/* Resumo da Compra */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Resumo da Compra
              </h3>
              <div className="compra-concluida-product-item">
                <img
                  src={img}
                  alt="Tênis"
                  className="compra-concluida-product-image"
                />
                <div>
                  <p>Tênis de Corrida</p>
                  <p>
                    <strong>Total:</strong> R$ 299,99
                  </p>
                </div>
              </div>
            </section>

            {/* Botão Imprimir Recibo */}
            <div className="compra-concluida-print-button">
              <button className="compra-concluida-button-link">
                Imprimir Recibo
              </button>
            </div>
          </div>

          {/* Botão Voltar para Home */}
          <button
            className="compra-concluida-home-button"
            onClick={handleHomeClick}
          >
            Voltar para Home
          </button>
        </div>
      </Layout>
    </div>
  );
}