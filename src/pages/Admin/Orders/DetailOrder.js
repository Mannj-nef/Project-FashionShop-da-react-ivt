import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { columnsAll } from "../../../common/table";
import { sharinganIcon } from "../../../components/Loading";
import { actGetOrderById } from "../../../redux/actions/orderAction";
import "../style.scss";
export default function DetailOrder() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { detailOrder, isLoading } = useSelector(
    (state) => state?.orderReducer
  );
  const listCart = detailOrder.cart;
  useEffect(() => {
    dispatch(actGetOrderById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleEdit = () => {
    setActive(true);
  };
  const handleCancel = () => {
    setActive(false);
  };
  const handleDeleteDetailOrder = () => {
    console.log("abc");
  };
  const columns = [
    ...columnsAll.columnDetailOrder,
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteDetailOrder(record)}
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <>
      {isLoading ? (
        <div className="loading-display">
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div className="container-fluid mt-5">
          <div className="title">
            <h1>Detail Order</h1>
          </div>
          <Table
            columns={columns}
            dataSource={listCart}
            rowKey="id"
            className="table-style"
          />
          <h1>Information</h1>
          <h2>Customer: {detailOrder.customer}</h2>

          {active ? (
            <div style={{ display: "flex" }}>
              <h2>Address:</h2>
              <input defaultValue={detailOrder.address}></input>
              <button className="btn btn-primary" onClick={() => handleEdit()}>
                Save
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <h2>Address: {detailOrder.address}</h2>
              <button className="btn btn-primary" onClick={() => handleEdit()}>
                Edit
              </button>
            </div>
          )}

          <h2>Total Invoice: {detailOrder.total}</h2>
        </div>
      )}
    </>
  );
}
