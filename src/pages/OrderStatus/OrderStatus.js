import { Table } from "antd";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import "./style.scss";

const OrderStatus = () => {
  const { height } = useSelector((state) => state.headerReducer);
  const history = useHistory();

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      price: 32,
      address: "10 Downing Street",
      phone: "09121",
    },
    {
      key: "2",
      name: "John",
      price: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      phone: "phone",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      phone: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      phone: "phone",
    },
  ];

  return (
    <div className="order-status" style={{ marginTop: height }}>
      <div className="container">
        <SidebarProfile></SidebarProfile>
        <div className="order-status-wrapp">
          <h2
            className="title inline-block"
            onClick={() => history.push(ROUTER_PATH.USER.path)}
          >
            <BsArrowLeft className="icon-back inline-block mr-5"></BsArrowLeft>
            <span>Back to me</span>
          </h2>
          <div className="order-status">
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
