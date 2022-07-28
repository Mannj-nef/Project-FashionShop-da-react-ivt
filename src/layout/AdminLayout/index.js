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

import { Link, Redirect, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import Container from "react-bootstrap/Container";
import { Dropdown, Menu } from "antd";
import { AuthTypes } from "../../common/types";

const role = JSON.parse(
  localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)
)?.role;

export default function AdminLayout({ children }) {
  const [show, setShow] = useState(true);
  const navigation = useRef(null);
  const ball = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const dMode = JSON.parse(localStorage.getItem("Dark_Mode"));
  const history = useHistory();
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
  const darkTheme = {
    background: "rgb(17, 25, 54)",
    color: "#fff",
  };
  const handleLogout = () => {
    localStorage.removeItem(AuthTypes.AUTH_LOCALSTORAGE);
    history.push(ROUTER_PATH.LOGIN.path);
  };
  // eslint-disable-next-line no-unused-vars
  const handleToggleMode = () => {
    setIsActive(!isActive);
    if (isActive) {
      localStorage.setItem("Dark_Mode", true);
      ball.current.style = "transform: translateX(24px)";
    } else {
      localStorage.removeItem("Dark_Mode");
      ball.current.style = "transform: translateX(0px)";
    }
  };
  const handleToggleSider = () => {
    setShow(!show);
    if (show) {
      navigation.current.classList.add("d-none");
    } else {
      navigation.current.classList.remove("d-none");
    }
  };
  // console.log();
  // if(JSON.parse(localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)).role !== "admin"){
  //   <Redirect to="/login" />
  // }
  // console.log();
  return (
    <>
      {role === "admin" ? (
        <div className="wrapper">
          <Nav ref={navigation} className="sidebar">
            <span className="logo">
              <img src="https://danangfantasticity.com/wp-content/uploads/2015/10/danang-logo.jpg"></img>
            </span>
            <ul className="dashboard">
              <span>Main</span>
              <Link to={ROUTER_PATH.HOME.path}>
                <button>
                  <i className="fa-solid fa-house"></i>
                  <h5>Web</h5>
                </button>
              </Link>
              <Link to={ROUTER_PATH.ADMIN.path}>
                <button>
                  <i className="fa-solid fa-gauge"></i> <h5>Dashboard</h5>
                </button>
              </Link>

              <Link to={ROUTER_PATH.PROFILE_ADMIN.path}>
                <button>
                  <i className="fa-solid fa-address-card"></i>
                  <h5>Profile</h5>
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
            <Navbar
              expand=""
              className="navbar-style"
              style={dMode && darkTheme}
            >
              <a className="sidebar-toggle" onClick={() => handleToggleSider()}>
                <i className="fa-solid fa-bars align-self-center"></i>
              </a>
              <div className="form-profile">
                <div className="dark-mode" onClick={() => handleToggleMode()}>
                  <input type="checkbox" className="checkbox" id="chk" />
                  <label>
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball" ref={ball}></div>
                  </label>
                </div>
                <SvgTransIcon />
                <SvgNotification />
                <Dropdown overlay={menu} trigger={["hover"]}>
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src={
                          JSON.parse(localStorage.getItem("AUTH_LOCALSTORAGE"))
                            .avatar
                        }
                      ></img>
                    </div>
                    <SvgSetting />
                  </div>
                </Dropdown>
              </div>
            </Navbar>
            <main className="content">
              <Container fluid>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">{children}</div>
                    </div>
                  </div>
                </div>
              </Container>
            </main>
          </div>
        </div>
      ) : (
        <Redirect to={ROUTER_PATH.LOGIN.path} />
      )}
    </>
  );
}
