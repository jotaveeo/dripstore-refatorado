import React, { useEffect, useState } from "react";
import ProductListing from "../../components/ProductListing/App";
import GalleryProduct from "../../components/GalleryProduct/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import BuyBox from "../../components/BuyBox/App";
import ProductOptions from "../../components/ProductOptions/App";
import img from "../../assets/tenis.png";

import "./style.css";

export default function ProductViewPage() {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(4); // Número de produtos a serem exibidos

  useEffect(() => {
    fetch("http://localhost:3000/api/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, displayCount)); // Exibe apenas a quantidade desejada de produtos
      });
  }, [displayCount]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="product-view-container">
        <GalleryProduct />
        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          reference="Esportivo | Nike | REF:12345"
          stars={4.8}
          rating={200}
          price="R$ 350,00"
          priceDiscount="R$ 249,99"
          description="Tênis confortável para a prática de esportes."
        >
          <ProductOptions
            options={["37", "38", "39", "40", "41"]}
            radius="5px"
            shape="square"
            type="text"
          />
          <ProductOptions
            options={["#ff5c5c", "#000", "#00c3ff", "#ffff00"]}
            shape="circle"
            type="color"
          />
        </BuyBox>
      </div>
      <Section title="Produtos relacionados">
        <ProductListing products={products} columns={4} rows={5} />
      </Section>
    </Layout>
  );
}
