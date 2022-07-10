import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sliders from "../../components/sliders/Sliders";

const LayoutUser = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header></Header>
      <Sliders></Sliders>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default LayoutUser;
