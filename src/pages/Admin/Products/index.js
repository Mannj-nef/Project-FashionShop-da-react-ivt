/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Dropdown, Menu, Button, Popconfirm } from "antd";
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
import ModalProduct from "./ModalProduct";
import { sharinganIcon } from "../../../components/Loading";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import { SUCCESS_MESSAGE } from "../../../common/message";
import "../style.scss";
import { cancel, columnsAll } from "../../../common/table";
export default function Products() {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productEdit, setProductEdit] = useState("");

  const { listProducts, isLoading } = useSelector(
    (state) => state?.productReducer
  );
  const { listCategory } = useSelector((state) => state?.categoryReducer);

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
    ...columnsAll.columnPro,
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
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDeleteProduct(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
          <button
            className="btn btn-danger"
          >
            Delete
          </button>
          </Popconfirm>
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
        <div className="loading-display">
          <Spin indicator={sharinganIcon} />
        </div>
      ) : (
        <div className="container-fluid mt-5">
          <div className="title">
            <h1>Products</h1>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button>Categories</Button>
                </Space>
              </a>
            </Dropdown>
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
      )}
    </>
  );
}
