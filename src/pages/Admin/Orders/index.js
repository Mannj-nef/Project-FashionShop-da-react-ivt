/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Table, Space, Spin, Popconfirm } from "antd";
import { actGetAllOrder } from "../../../redux/actions/orderAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import { deleteOrderById } from "../../../apis/orderApi";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../../common/routerLink";
import { cancel, columnsAll } from "../../../common/table";
import "../style.scss";
export default function Orders() {
  const { listOrder, isLoading: isOrderLoading } = useSelector(
    (state) => state?.orderReducer
  );
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
    ...columnsAll.columnOrder,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <button
            className="btn btn-primary"
            onClick={() => handleRedirectOrder(record)}
          >
            View
          </button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDeleteOrder(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-danger">Delete</button>
          </Popconfirm>
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
      {isOrderLoading ? (
        <div className="loading-display">
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div className="container-fluid mt-5">
          <div className="title">
            <h1>Orders</h1>
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
