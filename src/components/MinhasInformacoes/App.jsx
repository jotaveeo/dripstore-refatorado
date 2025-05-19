import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function MinhasInformacoes() {
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

  return (
    <div className="minhas-informacoes-container">
      <div className="minhas-informacoes-nav">
        <p>Meu Perfil</p>
        <hr />
        <p>
          <Link to="/meuspedidospage" className="link">
            Meus Pedidos
          </Link>
        </p>
        <hr />
        <p>Minhas Informações</p>
        <hr />
        <p>Métodos de Pagamento</p>
      </div>

      <div className="minhas-informacoes-content">
        <section className="minhas-informacoes-header">
          <div>
            <p>
              <strong>Minhas Informações</strong>
            </p>
          </div>
          <div className="minhas-informacoes-edit-link">
            <a href="#">Editar</a>
          </div>
        </section>

        <hr />

        <div className="minhas-informacoes-pessoais">
          <div className="minhas-informacoes-title">
            <h2>Informações Pessoais</h2>
          </div>
          <div className="minhas-informacoes-item">
            <p>Nome:</p>
            <p>{userInfo.nome}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>CPF:</p>
            <p>{userInfo.cpf}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Email:</p>
            <p>{userInfo.email}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Celular:</p>
            <p>{userInfo.celular}</p>
          </div>
        </div>

        <hr />

        <div className="minhas-informacoes-entrega">
          <div className="minhas-informacoes-title">
            <h2>Informações de Entrega</h2>
          </div>
          <div className="minhas-informacoes-item">
            <p>Endereço:</p>
            <p>{userInfo.endereco}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Bairro:</p>
            <p>{userInfo.bairro}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Cidade:</p>
            <p>{userInfo.cidade}</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>CEP:</p>
            <p>{userInfo.cep}</p>
          </div>
          {userInfo.complemento && (
            <div className="minhas-informacoes-item">
              <p>Complemento:</p>
              <p>{userInfo.complemento}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}