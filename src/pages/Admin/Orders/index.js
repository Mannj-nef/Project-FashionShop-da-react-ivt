/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Table, Space, Spin } from "antd";
import { actGetAllOrder } from "../../../redux/actions/orderAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import { deleteOrderById } from "../../../apis/orderApi";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
export default function Orders() {
  const { listOrder, isLoading } = useSelector((state) => state?.orderReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirectOrder = (order) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL_ORDER.path, {
        id: order.id,
      })
    );
  };
  const handleDeleteOrder = async (order) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteOrderById(order.id);
    dispatch(actGetAllOrder());
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Customer",
      key: "customer",
      dataIndex: "customer",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <button
            className="btn btn-primary"
            onClick={() => handleRedirectOrder(record)}
            style={{ fontSize: "1.6rem" }}
          >
            View
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteOrder(record)}
            style={{ fontSize: "1.6rem" }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(actGetAllOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div style={{ paddingTop: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Orders</h1>
          </div>
          <Table
            columns={columns}
            dataSource={listOrder}
            rowKey="id"
            className="table-style"
          />
          ;
        </div>
      )}
    </>
  );
}
