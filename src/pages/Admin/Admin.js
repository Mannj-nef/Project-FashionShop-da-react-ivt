/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import "./style.scss";
import { Column, Pie } from "@ant-design/plots";
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
import Nation from "../../components/Flag";

export default function Admin() {
  const { listOrder } = useSelector((state) => state?.orderReducer);
  const { listUser } = useSelector((state) => state?.userReducer);
  const { listProducts } = useSelector((state) => state?.productReducer);
  const dispatch = useDispatch();

  let numOfOrder = 0;
  let totalOfOrder = 0;
  let numOfUser = 0;
  let numOfProduct = 0;
  let revenueQ1 = 0;
  let revenueQ2 = 0;
  let revenueQ3 = 0;
  let revenueQ4 = 0;

  listOrder.map((order) => {
    let dateOrder = new Date(order.dateAdd).getMonth() + 1;
    numOfOrder++;
    totalOfOrder += order.total;
    if (dateOrder > 0 && dateOrder <= 3) {
      revenueQ1 += order.total;
    } else if (dateOrder > 3 && dateOrder <= 6) {
      revenueQ2 += order.total;
    } else if (dateOrder > 6 && dateOrder <= 9) {
      revenueQ3 += order.total;
    } else if (dateOrder > 9 && dateOrder <= 12) {
      revenueQ4 += order.total;
    }
  });
  listUser.map((user) => {
    if (user.role === "user") {
      numOfUser++;
    }
  });
  listProducts.map((products) => {
    numOfProduct++;
  });
  const data = [
    {
      type: "Quý 1",
      value: revenueQ1,
    },
    {
      type: "Quý 2",
      value: revenueQ2,
    },
    {
      type: "Quý 3",
      value: revenueQ3,
    },
    {
      type: "Quý 4",
      value: revenueQ4,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",

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
  const configPie = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  };
  const columns = [...columnsAll.columnPro];
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
            <div className="card-body py-3">
              <div className="world-map">
                <div className="col-xl-6 col-xxl-8 col-md-8">
                  <VectorMap
                    {...worldLowRes}
                    style={{ height: "252px", width: "100%" }}
                    checkedLayers={["us", "us"]}
                  />
                </div>

                <div className="col-xl-6 col-xxl-4 mt-3 col-md-4">
                  <Nation
                    nationCode={"vn"}
                    nationName={"Viet Nam"}
                    percent={69}
                  />
                  <Nation nationCode={"cn"} nationName={"Chani"} percent={69} />
                  <Nation
                    nationCode={"us"}
                    nationName={"United States"}
                    percent={69}
                  />
                  <Nation nationCode={"gr"} nationName={"Greek"} percent={69} />
                  <Nation nationCode={"jp"} nationName={"Japan"} percent={69} />
                  <Nation
                    nationCode={"mx"}
                    nationName={"Mexico"}
                    percent={69}
                  />
                  <Nation
                    nationCode={"eg"}
                    nationName={"Pharaoh"}
                    percent={69}
                  />
                  <Nation
                    nationCode={"th"}
                    nationName={"Thailand"}
                    percent={69}
                  />
                </div>
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
                pagination={{ defaultPageSize: 5 }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xxl-3 ">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Sales</h5>
            </div>
            <div className="card-body w-100 ">
              <Column {...config} />
            </div>
          </div>
          <div className="card flex-fill w-100 ">
            <div className="card-body w-100 ">
              <Pie {...configPie} style={{height: "330px"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
