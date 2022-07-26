import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/HomePage/Home"));
const Detail = lazy(() => import("../pages/Detail/Detail"));
const Login = lazy(() => import("../pages/Login/Login"));
const Shop = lazy(() => import("../pages/Shop/ShopStore"));
const MaleShop = lazy(() => import("../pages/Shop/ShopMan"));
const FemaleShop = lazy(() => import("../pages/Shop/ShopWoman"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Collection = lazy(() => import("../pages/Collection/Collection"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

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
    component: MaleShop,
  },
  {
    path: ROUTER_PATH.SHOP_WOMAN.path,
    isExact: true,
    component: FemaleShop,
  },
  {
    path: ROUTER_PATH.BLOG.path,
    isExact: true,
    component: Blog,
  },
  {
    path: ROUTER_PATH.LOGIN.path,
    isExact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.COLLECTION.path,
    isExact: true,
    component: Collection,
  },
  {
    path: ROUTER_PATH.CONTACT.path,
    isExact: true,
    component: Contact,
  },
];

//admin
const Admin = lazy(() => import("../pages/Admin/Admin"));
const Profile = lazy(() => import("../pages/Admin/Profile"));
const Products = lazy(() => import("../pages/Admin/Products"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Categories = lazy(() => import("../pages/Admin/Categories"));
const Orders = lazy(() => import("../pages/Admin/Orders"));
const DetailOrder = lazy(() => import("../pages/Admin/Orders/DetailOrder"));
export const adminRouter = [
  {
    path: ROUTER_PATH.ADMIN.path,
    isExact: true,
    component: Admin,
  },
  {
    path: ROUTER_PATH.PROFILE.path,
    isExact: true,
    component: Profile,
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
  {
    path: ROUTER_PATH.DETAIL_ORDER.path,
    isExact: true,
    component: DetailOrder,
  },
];
