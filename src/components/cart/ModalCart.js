import React, { useMemo } from "react";
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actAddOrder } from "../../redux/actions/orderAction";
import ModalLayout from "../modalLayout/ModalLayout";
import CartItem from "./CartItem";

// import { cartDetailItem } from "./MookData";

const ModalCart = ({ listCart }) => {
  const { profile } = useSelector((state) => state.authReducer);
  const { isLoading } = useSelector((state) => state.orderReducer);

  console.log(isLoading);

  const history = useHistory();
  const dispatch = useDispatch();

  const cartTotal = useMemo(
    () =>
      listCart.reduce((total, cartTotal) => (total += cartTotal.quantity), 0),
    [listCart]
  );

  const priceTotal = useMemo(
    () =>
      listCart.reduce(
        (total, cartTotal) => (total += cartTotal.quantity * cartTotal.price),
        0
      ),
    [listCart]
  );

  const handleCheckOut = () => {
    if (Object.keys(profile) <= 0) {
      history.push("/login");
    } else {
      const profileClone = { ...profile };
      delete profileClone.id;
      const data = {
        ...profileClone,
        cart: listCart,
      };
      dispatch(actAddOrder(data));
    }
  };

  return (
    <>
      <ModalLayout>
        <div className="cart">
          <h2 className="text-[2.5rem] uppercase p-6 shadow-sm flex items-center gap-6">
            <FaOpencart className=""></FaOpencart>
            Cart
          </h2>
          <div className="listCart max-h-[70vh] overflow-y-auto ">
            {listCart?.map((cartDetail) => (
              <CartItem key={cartDetail.id} cartDetail={cartDetail}></CartItem>
            ))}
          </div>
          <div className="pay-cart">
            <div className="cart-total">
              <span>Cart Total: {cartTotal}</span>
              <span> {priceTotal}$</span>
            </div>
            <button className="btn-pay relative" onClick={handleCheckOut}>
              <div
                className={`w-9 h-9 rounded-full left-1/2 translate-x-[-1/2]  border-3 animate-spin border-t-transparent absolute  ${
                  isLoading ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <span className={`${isLoading ? "opacity-0" : "opacity-100"}`}>
                Check out
              </span>
            </button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default ModalCart;
