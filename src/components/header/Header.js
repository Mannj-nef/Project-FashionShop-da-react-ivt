import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useHistory, useLocation, matchPath } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import "./style.scss";

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const header = headerRef.current;

    const handleBackColorHeader = () => {
      if (window.scrollY > 0) {
        header.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
      }
    };

    document.addEventListener("scroll", handleBackColorHeader);
    return () => document.removeEventListener("scroll", handleBackColorHeader);
  }, []);

  const handleToLogin = () => {
    history.push(ROUTER_PATH.LOGIN.path);
  };
  const handleToSignUp = () => {
    history.push(ROUTER_PATH.REGISTER.path);
  };

  const handleCheckActive = (path) => {
    const active = !!matchPath(pathname, {
      path,
      exact: true,
    })
      ? "navigation_link active"
      : "navigation_link";
    return active;
  };

  console.log();
  return (
    <div ref={headerRef} className="header ">
      <div className="container flex justify-between items-center">
        <div className="logo-wrapp">
          <h2 className="logo_title">
            <Link to={ROUTER_PATH.HOME.path}>NikaStore</Link>
          </h2>
        </div>
        <ul className="navigation flex gap-5">
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.HOME.path}
              className={handleCheckActive(ROUTER_PATH.HOME.path)}
            >
              Home
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.SHOP.path}
              className={handleCheckActive(ROUTER_PATH.SHOP.path)}
            >
              Shop
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.PRODUCT.path}
              className={handleCheckActive(ROUTER_PATH.PRODUCT.path)}
            >
              Products
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.DETAIL.path}
              className={handleCheckActive(ROUTER_PATH.DETAIL.path)}
            >
              detail
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.ADMIN.path}
              className={handleCheckActive(ROUTER_PATH.ADMIN.path)}
            >
              admin
            </Link>
          </li>
        </ul>
        <div className="flex  justify-between items-center gap-5">
          <button className="btn-nav btn-login" onClick={handleToLogin}>
            Login
          </button>
          <button
            className="btn-nav btn-sing active_btn"
            onClick={handleToSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
