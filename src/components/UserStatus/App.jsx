import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function UserStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o login está presente no localStorage
    const login = localStorage.getItem("login");

    if (login) {
      setIsLoggedIn(true);
      setUserEmail(login); // Pode ser o e-mail ou o nome do usuário
    }
  }, []);

  const handleLogout = () => {
    // Remove as informações de login do localStorage
    localStorage.removeItem("login");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/"); // Redireciona para a página inicial
  };

  return isLoggedIn ? (
    // Se estiver logado, exibe o e-mail ou outro dado como um link e o botão de sair
    <div className="user-status">
      <Link to="/minhasinformacoes" className="user-email">
        Olá, {userEmail} 😊
      </Link>
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  ) : (
    // Se não estiver logado, exibe os botões
    <>
      <a href="/cadastro" className="busca-cadastro">
        Cadastre-se
      </a>
      <a href="/acessarconta" className="busca-button-primary">
        Entrar
      </a>
    </>
  );
}