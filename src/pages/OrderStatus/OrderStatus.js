import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import useBackPage from "../../hooks/useBackPage";
import { actGetOrderByProfile } from "../../redux/actions/orderAction";
import "./style.scss";
import TableOrder from "./TableOrder";

const OrderStatus = () => {
  useBackPage();
  const { height } = useSelector((state) => state.headerReducer);
  const { listOrder, isLoading } = useSelector((state) => state?.orderReducer);
  const { profile } = useSelector((state) => state?.authReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const profileClone = { ...profile };
    const data = {
      email: profileClone.email,
      password: profileClone.password,
    };

    dispatch(actGetOrderByProfile(data));
  }, [dispatch, profile]);

  return (
    <div className="order-status" style={{ paddingTop: height }}>
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
            <TableOrder listOrder={listOrder}></TableOrder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
