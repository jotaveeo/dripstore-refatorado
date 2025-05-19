import React, { useEffect, useState } from "react";
import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import Gallery from "../../components/Gallery/app";
import Section from "../../components/Section/App";
import Colecao from "../../components/Colecao/app";
import ProdutoLaye from "../../components/ProdutoLaye/App";
import "./style.css";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(8); // Número de produtos a serem exibidos

  useEffect(() => {
    fetch("http://localhost:3000/api/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, displayCount)); // Exibe apenas a quantidade desejada de produtos
      });
  }, [displayCount]);

  return (
    <Layout>
      <Gallery />
      <Colecao />
      <Section />
      <ProductListing products={products} columns={4} rows={2} />
      <ProdutoLaye />
    </Layout>
  );
}
