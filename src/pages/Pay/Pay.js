import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { actAddOrder, actGetAllOrder } from "../../redux/actions/orderAction";

import useBackPage from "../../hooks/useBackPage";
import { useHistory } from "react-router-dom";

import Form from "../../components/form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { VALIDATE_YUP } from "../../common/validateYup";

import Info from "./Info";
import "./style.scss";
import Delivery from "./Delivery";
import Payment from "./Payment";
import OrderItem from "./OrderItem";
import { actChangeProfile } from "../../redux/actions/auth/authAction";
import { ROUTER_PATH } from "../../common/routerLink";
import { Status } from "../../common/types";

const schema = Yup.object({
  // address: VALIDATE_YUP.DESCRIPTION,
  // phone: VALIDATE_YUP.PHONE,
});

const Pay = () => {
  const [ischeckout, setIsCheckout] = useState(false);
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");
  const history = useHistory();
  const { height } = useSelector((state) => state.headerReducer);
  const { listCart } = useSelector((state) => state.cartReducer);
  const { profile } = useSelector((state) => state.authReducer);
  const { isOrderLoading } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  useBackPage();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    if (delivery === "" || payment === "") {
      alert("làm ơn chọn Delivery và Payment");
      return;
    }

    const data = {
      ...profile,
      ...values,
      delivery,
      payment,
    };
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(actChangeProfile(data));
        alert("thành công");
        setIsCheckout(true);
        reset();
      }, 2000);
    });
  };

  const handleCheckOut = () => {
    if (ischeckout) {
      const profileClone = { ...profile };
      delete profileClone.id;
      const data = {
        ...profileClone,
        status: Status.PROCESSING,
        cart: listCart,
      };
      dispatch(actAddOrder(data));
      alert("order thành công, đến xem thông tin đơn hàng");
      history.push(ROUTER_PATH.ORDERSTATUS.path);
    } else {
      alert("cần cập nhật thông tin");
    }
    setIsCheckout(false);
  };

  return (
    <div className="checkout-pay" style={{ marginTop: height }}>
      <div className="container ">
        <div className="relative w-full">
          <div className="pay-checkout">
            {/* title */}
            <h2 className="title inline-block" onClick={() => history.goBack()}>
              <BsArrowLeft className="icon-back mr-5 inline-block"></BsArrowLeft>
              <span>Checkout</span>
            </h2>

            <Form handleSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[50px]">
                <Info control={control} errors={errors}></Info>
                <Delivery setDelivery={setDelivery}></Delivery>
                <Payment payment={payment} setPayment={setPayment}></Payment>
              </div>

              <button type="submit" className="btn-submit w-[200px]">
                {isSubmitting ? (
                  <div
                    className={`w-9 h-9 rounded-full mx-auto  border-3 animate-spin border-t-transparent `}
                  ></div>
                ) : (
                  "Save"
                )}
              </button>
            </Form>
          </div>
          <div className="pay-order">
            <h2 className="title mb-5">Order</h2>

            <div className="max-h-[400px] h-full overflow-y-auto order-list">
              {listCart?.map((item) => (
                <OrderItem key={item.id} product={item}></OrderItem>
              ))}
            </div>
            <div className="order-bott">
              <div className="mb-5 pt-5 ">
                <p>
                  Name
                  <span className="font-semibold ml-3">{profile.fullName}</span>
                </p>
                <p>
                  Email:
                  <span className="font-semibold ml-3">{profile.email}</span>
                </p>
                <p>
                  Phone:
                  <span className="font-semibold ml-3">
                    {profile.phone || ""}
                  </span>
                </p>
                <p>
                  Address:
                  <span className="font-semibold ml-3">
                    {profile.address || ""}
                  </span>
                </p>
              </div>
              <div>
                <h2>
                  <span>Total</span>
                  <span>{"price"}</span>
                </h2>
              </div>
            </div>

            <button
              type="submit"
              className="btn-submit w-full"
              onClick={handleCheckOut}
            >
              {isOrderLoading ? (
                <div
                  className={`w-9 h-9 rounded-full mx-auto  border-3 animate-spin border-t-transparent `}
                ></div>
              ) : (
                "Checkout"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
