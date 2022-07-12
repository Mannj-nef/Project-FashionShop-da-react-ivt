import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useHistory, useLocation, matchPath } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import useClickActive from "../../hooks/useClickActive";
import "./style.scss";

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  // console.log(location);
  // useClickActive(".navigation_link");
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
  console.log(
    matchPath(pathname, {
      path: ROUTER_PATH.HOME.path,
      exact: true,
      strict: false,
    }),
    "asdasd",
    pathname
  );
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
              className={
                !!matchPath(pathname, {
                  path: ROUTER_PATH.HOME.path,
                  exact: true,
                })
                  ? "navigation_link active"
                  : "navigation_link"
              }
            >
              Home
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.SHOP.path}
              className={
                !!matchPath(pathname, {
                  path: ROUTER_PATH.SHOP.path,
                  exact: true,
                })
                  ? "navigation_link active"
                  : "navigation_link"
              }
            >
              Shop
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.PRODUCT.path}
              className={
                !!matchPath(pathname, {
                  path: ROUTER_PATH.PRODUCT.path,
                  exact: true,
                })
                  ? "navigation_link active"
                  : "navigation_link"
              }
            >
              Products
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.DETAIL.path}
              className={
                !!matchPath(pathname, {
                  path: ROUTER_PATH.DETAIL.path,
                  exact: true,
                })
                  ? "navigation_link active"
                  : "navigation_link"
              }
            >
              detail
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.ADMIN.path}
              className={
                !!matchPath(pathname, {
                  path: ROUTER_PATH.ADMIN.path,
                  exact: true,
                })
                  ? "navigation_link active"
                  : "navigation_link"
              }
            >
              admin
            </Link>
          </li>
        </ul>
        <div className="flex  justify-between items-center gap-5">
          <button className="btn btn-nav btn-login" onClick={handleToLogin}>
            Login
          </button>
          <button
            className="btn btn-nav btn-sing active_btn"
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
