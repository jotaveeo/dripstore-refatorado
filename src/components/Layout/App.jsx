
import PropTypes from "prop-types";
import Footer from "../Footer/App";
import Header from "../Header/App";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};