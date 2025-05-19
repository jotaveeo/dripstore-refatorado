import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";

import "./style.css";

export default function Carrinho() {
  return (
    <>
      <Layout>
        <Section title="Produtos relacionados">
          <ProductListing />
        </Section>
      </Layout>
    </>
  );
}
