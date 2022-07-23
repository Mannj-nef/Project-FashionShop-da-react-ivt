import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import CheckBoxWrapp from "../../components/form/input/CheckBoxWrapp";
import Input from "../../components/form/input/InputWrrapp";
import Form from "../../components/form/Form";
import { useSelector, useDispatch } from "react-redux";
import { VALIDATE_YUP } from "../../common/validateYup";
import { actLogin } from "../../redux/actions/auth/authAction";
import { actGetAllUser } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

const schema = Yup.object({
  // email: VALIDATE_YUP.EMAIL,
  // password: VALIDATE_YUP.PASSWORD,
});
const FormSignIng = () => {
  const { listUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    console.log("sing in", values);
    listUser.map((user) => {
      if (values.email === user.email && values.password === user.password) {
        localStorage.setItem("Email", user.email);
        localStorage.setItem("Role", user.role);
        localStorage.setItem("Avatar", user.avatar);

        history.push(ROUTER_PATH.HOME.path);
        console.log("login success");
      } else {
        console.log("login fail");
      }
    });
    // await dispatch(actLogin(values));
  };

  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);

  return (
    <>
      <h2 className="login-title">Wellcome back</h2>
      <p className="title-sup">Wellcome back! Please enter your details</p>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="relative pb-5">
          <Input
            name="email"
            placeholder="Enter your email"
            control={control}
            label="Email Address"
            error={errors?.email?.message}
          ></Input>
          {errors?.email?.message && (
            <p className="text-red-500 bottom-0 absolute">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            name="password"
            placeholder="Enter your password"
            control={control}
            label="Password"
            type="password"
            error={errors?.password?.message}
          ></Input>
          {errors?.password?.message && (
            <p className="text-red-500 top-full  absolute">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="flex items-center mt-[50px] justify-between">
          <CheckBoxWrapp name="remember" control={control} type="password">
            <span className="sub_checkbox">Remember me </span>
          </CheckBoxWrapp>
          <span className="font-semibold cursor-pointer">Forgot password</span>
        </div>
        <button type="submit" className="btn-submit">
          Sign in
        </button>
      </Form>
    </>
  );
};

export default FormSignIng;
