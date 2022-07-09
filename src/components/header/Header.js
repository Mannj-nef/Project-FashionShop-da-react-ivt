import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

const Header = () => {
  return (
    <div>
      <ul>
        <li className=" flex gap-3">
          <Link to={ROUTER_PATH.HOME.path}>home</Link>
          <Link to={ROUTER_PATH.DETAIL.path}>detail</Link>
          <Link to={ROUTER_PATH.ADMIN.path}>admin</Link>
          <Link to={ROUTER_PATH.LOGIN.path}>login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
