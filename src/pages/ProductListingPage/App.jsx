import React, { useEffect, useState } from "react";
import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import FilterGroup from "../../components/FilterGroup/App";
import SectionResultados from "../../components/SectionResultados/App";
import img from "../../assets/tenis.png";
import "./style.css";

const products = [...Array(14)].map((_, index) => ({
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
}));

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Layout>
      <SectionResultados />
      <div className="container-filter">
        <FilterGroup />
        <ProductListing products={products} columns={3} rows={5} />
      </div>
    </Layout>
  );
}
