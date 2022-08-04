import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { AuthTypes } from "../../common/types";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import useBackPage from "../../hooks/useBackPage";
import { actGetOrderByFilter } from "../../redux/actions/orderAction";
import "./style.scss";
import TableOrder from "./TableOrder";
import {sharinganIcon} from "../../components/Loading";

const id = JSON.parse(localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)).id;
const OrderStatus = () => {
  useBackPage();
  const { height } = useSelector((state) => state.headerReducer);
<<<<<<< HEAD
  const { listOrder, isOrderLoading } = useSelector(
    (state) => state?.orderReducer
  );
=======
  const { listOrder } = useSelector((state) => state?.orderReducer);
  const [orderFilter, setOrderFilter] = useState(false);
  const { profile } = useSelector((state) => state.authReducer);
>>>>>>> 2e63321 (update user)
  const history = useHistory();
  const dispatch = useDispatch();

  const orders = useMemo(() => {
    listOrder.filter(
      (item) => item.email === profile.email && item.userId === profile.id
    );
  }, [listOrder, profile.email, profile.id]);
  useEffect(() => {
    console.log(orders);

    dispatch(actGetOrderByFilter({ userId: id }));
    setOrderFilter(true);
  }, [dispatch, profile, orderFilter]);

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
<<<<<<< HEAD
            {isOrderLoading ? (
              sharinganIcon
            ) : (
              <TableOrder listOrder={listOrder}></TableOrder>
            )}
=======
            <TableOrder listOrder={orderFilter ? listOrder : ""}></TableOrder>
>>>>>>> 2e63321 (update user)
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
