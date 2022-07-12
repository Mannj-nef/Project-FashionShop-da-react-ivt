import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById } from "../../../apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";
import ModalProduct from "./ModalProduct";
export default function Products() {
  const listProducts = useSelector((state) => state?.product?.listProducts);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productEdit, setProductEdit] = useState("");

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (product) => {
    setProductEdit(product)
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const handleDeleteProduct = async (product) => {
    toast.success("Xóa thành công",{autoClose: 1000});
    await deleteProductById(product.id);
    dispatch(actGetAllProduct());
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
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
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteProduct(record)}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(actGetAllProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ paddingTop: "30px" }}>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Products</h1>
        <button className="btn btn-success" onClick={() => showModalAdd()}>
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
  );
}
