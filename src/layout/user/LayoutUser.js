import React from "react";
import BackTop from "../../components/backTop/BackTop";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const LayoutUser = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <BackTop></BackTop>
      <Footer></Footer>
    </div>
  );
};

export default LayoutUser;
