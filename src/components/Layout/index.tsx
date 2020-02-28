import React from "react";
import Header from "./Header/";
import Footer from './Footer'

const Layout: React.FC = props => {
  return (
    <section className="hero is-info is-fullheight">
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </section>
  );
};

export default Layout;
