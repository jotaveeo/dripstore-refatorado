// src/pages/NotFoundPage/App.jsx
import React from "react";
import Layout from "../Layout/App";

export default function NotFoundPage() {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Página não encontrada</h1>
        <img
          src="https://http.cat/404"
          alt="404 Not Found"
          style={{ width: "50%", maxWidth: "500px" }}
        />
      </div>
    </Layout>
  );
}
