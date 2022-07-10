import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import "./style.scss";

const Header = () => {
  return (
    <div className="header container flex justify-between items-center">
      <div className="logo-wrapp">
        <h2 className="logo_title">
          <Link to={ROUTER_PATH.HOME.path}>NikaStore</Link>
        </h2>
      </div>
      <ul className="navigation flex gap-5">
        <li className="navigation_item">
          <Link to={ROUTER_PATH.HOME.path} className="navigation_link active">
            Home
          </Link>
        </li>
        <li className="navigation_item">
          <Link to={ROUTER_PATH.DETAIL.path} className="navigation_link">
            Shop
          </Link>
        </li>
        <li className="navigation_item">
          <Link to={ROUTER_PATH.DETAIL.path} className="navigation_link">
            Products
          </Link>
        </li>
        <li className="navigation_item">
          <Link to={ROUTER_PATH.DETAIL.path} className="navigation_link">
            detail
          </Link>
        </li>

        <li className="navigation_item">
          <Link to={ROUTER_PATH.ADMIN.path} className="navigation_link">
            admin
          </Link>
        </li>
      </ul>
      <div className="flex  justify-between items-center gap-5">
        <button className="btn btn-nav btn-login">Login</button>
        <button className="btn btn-nav btn-sing active_btn">Sing up</button>
      </div>
    </div>
  );
};

export default Header;
