import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/HomePage/Home"));
const Detail = lazy(() => import("../pages/Detail/Detail"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Login/SignUp"));
const Shop = lazy(() => import("../pages/Shop/ShopStore"));
const maleShop = lazy(() => import("../pages/Shop/ShopMan"));
const femaleShop = lazy(() => import("../pages/Shop/ShopWoman"));
const product = lazy(() => import("../pages/Product/Product"));
const collection = lazy(() => import("../pages/Collection/Collection"));

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
    path: ROUTER_PATH.SHOP.path,
    isExact: true,
    component: Shop,
  },
  {
    path: ROUTER_PATH.SHOP_MAN.path,
    isExact: true,
    component: maleShop,
  },
  {
    path: ROUTER_PATH.SHOP_WOMAN.path,
    isExact: true,
    component: femaleShop,
  },
  {
    path: ROUTER_PATH.PRODUCT.path,
    isExact: true,
    component: product,
  },
  {
    path: ROUTER_PATH.LOGIN.path,
    isExact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.REGISTER.path,
    isExact: true,
    component: Register,
  },
  {
    path: ROUTER_PATH.COLLECTION.path,
    isExact: true,
    component: collection,
  },
];

//addmin
const Admin = lazy(() => import("../pages/Admin/Admin"));
const Analytics = lazy(() => import("../pages/Admin/Analytics"));
const Products = lazy(() => import("../pages/Admin/Products"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Categories = lazy(() => import("../pages/Admin/Categories"));
const Orders = lazy(() => import("../pages/Admin/Orders"));

export const adminRouter = [
  {
    path: ROUTER_PATH.ADMIN.path,
    isExact: true,
    component: Admin,
  },
  {
    path: ROUTER_PATH.ANALYTICS.path,
    isExact: true,
    component: Analytics,
  },
  {
    path: ROUTER_PATH.PRODUCTS.path,
    isExact: true,
    component: Products,
  },
  {
    path: ROUTER_PATH.USERS.path,
    isExact: true,
    component: Users,
  },
  {
    path: ROUTER_PATH.CATEGORIES.path,
    isExact: true,
    component: Categories,
  },
  {
    path: ROUTER_PATH.ORDERS.path,
    isExact: true,
    component: Orders,
  },
];
