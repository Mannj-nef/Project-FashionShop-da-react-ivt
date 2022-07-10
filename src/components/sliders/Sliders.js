import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import "./style.scss";

const Sliders = () => {
  return (
    <div className="slider_home">
      <div className="container silder-slogan__wrapp">
        <h1 className="slogan-title">Color your days and make your story</h1>
        <p className="slogan_sub">
          Don't wory abount your appearance today, we are here for you to
          provider what you need to color your day and let's make a beatiful
          story today
        </p>
        <p className="text-center">- Unlock your style -</p>

        <Link to={ROUTER_PATH.SHOP.path} className="btn btn-toShop">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Sliders;
