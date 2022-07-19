/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Dropdown, Menu, Button } from "antd";
import {
  actGetAllProduct,
  actGetProductByCat,
} from "../../../redux/actions/productAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById } from "../../../apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";
import ModalProduct from "./ModalProduct";
import { sharinganIcon } from "../../../components/Loading";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import { SUCCESS_MESSAGE } from "../../../common/message";

export default function Products() {
  const { listProducts, isLoading } = useSelector(
    (state) => state?.productReducer
  );
  const { listCategory } = useSelector((state) => state?.categoryReducer);

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productEdit, setProductEdit] = useState("");

  const handleFilter = ({ key }) => {
    dispatch(actGetProductByCat(key));
  };

  const menu = (
    <Menu
      onClick={handleFilter}
      items={listCategory.map((cat) => {
        return {
          label: cat.categoryName,
          key: cat.id,
        };
      })}
    />
  );
  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (product) => {
    setProductEdit(product);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const handleDeleteProduct = async (product) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteProductById(product.id);
    dispatch(actGetAllProduct());
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={record.image}
          style={{ width: "100px", height: "100px" }}
        ></img>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Sales",
      key: "sales",
      dataIndex: "sales",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <button
            className="btn btn-primary"
            onClick={() => showModalEdit(record)}
            style={{ fontSize: "1.6rem" }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteProduct(record)}
            style={{ fontSize: "1.6rem" }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div style={{ paddingTop: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Products</h1>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button>Categories</Button>
                </Space>
              </a>
            </Dropdown>
            <button
              className="btn btn-success"
              onClick={() => showModalAdd()}
              style={{ fontSize: "1.6rem" }}
            >
              Add Product
            </button>
            <ModalProduct
              modalTitle={modalTitle}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              productEdit={productEdit}
            />
          </div>
          <Table
            columns={columns}
            dataSource={listProducts}
            rowKey="id"
            className="table-style"
          />
          ;
        </div>
      )}
    </>
  );
}
