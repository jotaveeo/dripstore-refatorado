import React, { useEffect, useState } from "react";
import ProductListing from "../../components/ProductListing/App";
import GalleryProduct from "../../components/GalleryProduct/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import BuyBox from "../../components/BuyBox/App";
import ProductOptions from "../../components/ProductOptions/App";
import img from "../../assets/tenis.png";
import "./style.css";
import Carrinho from "../../components/Carrinho/App";


export default function CarrinhoPage() {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(4); // Número de produtos a serem exibidos

  useEffect(() => {
    fetch("http://localhost:3000/api/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, displayCount)); // Exibe apenas a quantidade desejada de produtos
      });
  }, [displayCount]);

  return (
    <Layout>
      <Carrinho />
      <Section title="Produtos relacionados">
        <ProductListing products={products} columns={4} rows={5} />
      </Section>
    </Layout>
  );
}
