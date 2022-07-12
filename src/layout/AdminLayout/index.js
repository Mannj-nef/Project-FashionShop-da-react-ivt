/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./style.scss";
import p1 from "../../assets/admin/p1.jpg";
import {
  SvgCategories,
  SvgLogo,
  SvgMenuToggle,
  SvgNotification,
  SvgOrder,
  SvgProducts,
  SvgSetting,
  SvgTransIcon,
  SvgUser,
} from "./svg";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
export default function AdminLayout({ children }) {
  const [show, setShow] = useState(true);
  const navigation = useRef(null);
  const main = useRef(null);

  const handleToggleSider = () => {
    setShow(!show);
    if(show){
      navigation.current.style = "transform: translateX(-1000px)";
      main.current.style.marginLeft = "0px"
    }else{
      navigation.current.style = "transform: translateX(0px)"
      main.current.style.marginLeft = "180px"
    }
      
  };
  return (
    <div className="layout">
      <header className="header-style">
        <div className="tool-bar">
          <div
            style={{
              width: "230px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <SvgLogo />
            </span>
            <SvgMenuToggle handleToggleSider={() => handleToggleSider()} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input className="search-bar" placeholder="Search"></input>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SvgTransIcon />
              <SvgNotification />
              <div className="profile">
                <div className="avatar">
                  <img src={p1}></img>
                </div>
                <SvgSetting />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ display: "flex"}}>
        <nav ref={navigation}>
          <ul className="dashboard">
            <span>Dashboard</span>
            <Link to={ROUTER_PATH.ADMIN.path}>
              <button>
                <i className="fa-solid fa-gauge"></i> <h5>Main</h5>
              </button>
            </Link>
            <Link to={ROUTER_PATH.ANALYTICS.path}>
              <button>
                <i className="fa-solid fa-chart-area"></i>
                <h5>Analytics</h5>
              </button>
            </Link>
          </ul>
          <hr style={{ marginTop: "10px" }}></hr>
          <ul className="dashboard">
            <span>Manage</span>
            <Link to={ROUTER_PATH.PRODUCTS.path}>
              <button>
                <SvgProducts />
                <h5>Products</h5>
              </button>
            </Link>
            <Link to={ROUTER_PATH.USERS.path}>
              <button>
                <SvgUser />
                <h5>User</h5>
              </button>
            </Link>
            <Link to={ROUTER_PATH.CATEGORIES.path}>
              <button>
                <SvgCategories />
                <h5>Categories</h5>
              </button>
            </Link>
            <Link to={ROUTER_PATH.ORDERS.path}>
              <button>
                <SvgOrder />
                <h5>Orders</h5>
              </button>
            </Link>
          </ul>
          <hr style={{ marginTop: "10px" }}></hr>
        </nav>
        <main ref={main}>
          <div className="main-content">{children}</div>
        </main>
      </div>
    </div>
  );
}
