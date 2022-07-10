import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const LayoutUser = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default LayoutUser;
