/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./style.scss";
import {
  SvgCategories,
  SvgNotification,
  SvgOrder,
  SvgProducts,
  SvgSetting,
  SvgTransIcon,
  SvgUser,
} from "./svg";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import { Link, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import Container from "react-bootstrap/Container";
import { Dropdown, Menu } from "antd";
export default function AdminLayout({ children }) {
  const [show, setShow] = useState(true);
  const navigation = useRef(null);
  const header = useRef(null);
  const card = useRef(null);
  const content = useRef(null);
  const history = useHistory();
  const [isActive, setActive] = useState(true);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" onClick={() => handleLogout()}>
              Log out
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Role");
    localStorage.removeItem("Avatar");

    history.push(ROUTER_PATH.LOGIN.path);
  };
  // eslint-disable-next-line no-unused-vars
  const handleToggleMode = () => {
    setActive(!isActive);
    if (isActive) {
      header.current.style = "background: rgb(17, 25, 54)";
      card.current.style = "background: rgb(17, 25, 54)";
      content.current.style = "background: rgb(26, 34, 63)";
    } else {
      header.current.style = "background: #ffffff";
      card.current.style = "background: #ffffff";
      content.current.style = "background: #f5f7fb";
    }
  };
  const handleToggleSider = () => {
    setShow(!show);
    if (show) {
      navigation.current.style.display = "none";
    } else {
      navigation.current.style.display = "block";
    }
  };
  return (
    <>
      {localStorage.getItem("Role") === "admin" ? (
        <div className="wrapper">
          <Nav ref={navigation} className="sidebar">
            <span className="logo">
              <img src="https://danangfantasticity.com/wp-content/uploads/2015/10/danang-logo.jpg"></img>
            </span>
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
            <hr className="hr-style"></hr>
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
            <hr className="hr-style"></hr>
          </Nav>
          <div className="main">
            <Navbar expand="" className="navbar-style" ref={header}>
              <a className="sidebar-toggle" onClick={() => handleToggleSider()}>
                <i className="fa-solid fa-bars align-self-center"></i>
              </a>
              <div className="form-profile">
                <div className="dark-mode" onClick={() => handleToggleMode()}>
                  <input type="checkbox" className="checkbox" id="chk" />
                  <label>
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball"></div>
                  </label>
                </div>
                <SvgTransIcon />
                <SvgNotification />
                <Dropdown overlay={menu} trigger={["hover"]}>
                  <div className="profile">
                    <div className="avatar">
                      <img src={localStorage.getItem("Avatar")}></img>
                    </div>
                    <SvgSetting />
                  </div>
                </Dropdown>
              </div>
            </Navbar>
            <main className="content" ref={content}>
              <Container fluid>
                <div className="row">
                  <div className="col-12">
                    <div className="card" ref={card}>
                      <div className="card-body">{children}</div>
                    </div>
                  </div>
                </div>
              </Container>
            </main>
          </div>
        </div>
      ) : (
        history.push(ROUTER_PATH.HOME.path)
      )}
    </>
  );
}
