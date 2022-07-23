/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import "./style.scss";
import { Column } from "@ant-design/plots";
import { VectorMap } from "@south-paw/react-vector-maps";
import worldLowRes from "./world.json";
import { useSelector, useDispatch } from "react-redux";
import CardAnalytics from "../../components/CardAnalytics";
import { actGetAllProduct } from "../../redux/actions/productAction";
import { Table } from "antd";
import "antd/dist/antd.css";
import { actGetAllOrder } from "../../redux/actions/orderAction";
import { actGetAllUser } from "../../redux/actions/userAction";
import { columnsAll } from "../../common/table";

export default function Admin() {
  const data = [
    {
      type: "Tháng 1",
      value: 0.16,
    },
    {
      type: "Tháng 2",
      value: 0.125,
    },
    {
      type: "Tháng 1",
      value: 0.24,
    },
    {
      type: "Tháng 1",
      value: 0.19,
    },
    {
      type: "Tháng 1",
      value: 0.22,
    },
    {
      type: "Tháng 1",
      value: 0.05,
    },
    {
      type: "Tháng 1",
      value: 0.01,
    },
    {
      type: "Tháng 1",
      value: 0.015,
    },
  ];
  const paletteSemanticRed = "#F4664A";
  const brandColor = "#5B8FF9";

  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "10-30分" || type === "30+分") {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  const columns = [...columnsAll.columnPro];
  const { listOrder } = useSelector((state) => state?.orderReducer);
  const { listUser } = useSelector((state) => state?.userReducer);
  const { listProducts } = useSelector((state) => state?.productReducer);
  const dispatch = useDispatch();
  let numOfOrder = 0;
  let totalOfOrder = 0;
  let numOfUser = 0;
  let numOfProduct = 0;
  listOrder.map((order) => {
    numOfOrder++;
    totalOfOrder += order.total;
  });
  listUser.map((user) => {
    if (user.role === "user") {
      numOfUser++;
    }
  });
  listProducts.map((products) => {
    numOfProduct++;
  });
  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllOrder());
    dispatch(actGetAllUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-xxl-5 d-flex">
          <div className="w-100">
            <div className="row">
              <div className="col-sm-6">
                <CardAnalytics
                  title={"Products"}
                  icon={<i className="fa-solid fa-truck"></i>}
                  value={numOfProduct}
                />
                <CardAnalytics
                  title={"Order"}
                  icon={<i className="fa-solid fa-cart-shopping"></i>}
                  value={numOfOrder}
                />
              </div>
              <div className="col-sm-6">
                <CardAnalytics
                  title={"Earning"}
                  icon={<i className="fa-solid fa-dollar-sign"></i>}
                  value={totalOfOrder + "$"}
                />
                <CardAnalytics
                  title={"Customer"}
                  icon={<i className="fa-solid fa-users"></i>}
                  value={numOfUser}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-7">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Something ?</h5>
            </div>
            <div className="card-body py-3">
              <div className="world-map">
                <VectorMap
                  {...worldLowRes}
                  style={{ height: "227px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Top Products Sales</h5>
              <Table
                columns={columns}
                dataSource={listProducts}
                rowKey="id"
                className="table-style"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Sales</h5>
            </div>
            <div className="card-body d-flex w-100">
              <Column {...config} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
