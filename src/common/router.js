import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/HomePage/Home"));
const Detail = lazy(() => import("../pages/Detail/Detail"));
const Login = lazy(() => import("../pages/Login/Login"));

export const userRouter = [
  {
    path: ROUTER_PATH.HOME.path,
    isExact: true,
    component: Home,
  },
  {
    path: ROUTER_PATH.DETAIL.path,
    isExact: true,
    component: Detail,
  },
  {
    path: ROUTER_PATH.LOGIN.path,
    isExact: true,
    component: Login,
  },
];

//addmin
const Admin = lazy(() => import("../pages/Admin/Admin"));

export const addminRouter = [
  {
    path: ROUTER_PATH.ADMIN.path,
    isExact: true,
    component: Admin,
  },
];
