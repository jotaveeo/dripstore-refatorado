import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/App.jsx";
import ProductListingPage from "./pages/ProductListingPage/App.jsx";
import ProductViewPage from "./pages/ProductViewPage/App.jsx";
import NotFoundPage from "./components/NotFoundPage/App.jsx";
import Acessarconta from "./pages/Acessarconta/App.jsx";
import Cadastro from "./pages/Cadastro/App.jsx";
import Carrinhopage from "./pages/Carrinhopage/App.jsx";
import Comprafinalizada from "./pages/Comprafinalizada/App.jsx";
import Finalizarcompra from "./pages/Finalizarcompra/App.jsx";
import Meuspedidos from "./pages/Meuspedidos/App.jsx";
import MeusPedidosPage from "./pages/MeusPedidosPage/App.jsx";
import MinhasInformacoesPage from "./pages/MinhasInformacoesPage/App.jsx";
import CategoriasPage from "./pages/CategoriasPage/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/produtos" element={<ProductListingPage />} />

        <Route path="/produtos/detalhes" element={<ProductViewPage />} />

        <Route path="/acessarconta" element={<Acessarconta />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/carrinho" element={<Carrinhopage />} />

        <Route path="/comprafinalizada" element={<Comprafinalizada />} />

        <Route path="/finalizarcompra" element={<Finalizarcompra />} />

        <Route path="/meuspedidos" element={<Meuspedidos />} />

        <Route path="/meuspedidospage" element={<MeusPedidosPage />} />

        <Route path="/minhasinformacoes" element={<MinhasInformacoesPage />} />

        <Route path="/categorias" element={<CategoriasPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
