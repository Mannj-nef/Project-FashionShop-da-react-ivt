/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  Table,
  Space,
  Spin,
  Dropdown,
  Menu,
  Button,
  Popconfirm,
  Input,
} from "antd";
import {
  actGetAllProduct,
  actGetProductByFilter,
} from "../../../redux/actions/productAction";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById } from "../../../apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProduct from "./ModalProduct";
import { sharinganIcon } from "../../../components/Loading";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import { SUCCESS_MESSAGE } from "../../../common/message";
import "../style.scss";
import { cancel, columnsAll } from "../../../common/table";
export default function Products() {
  const dispatch = useDispatch();
  const { listProducts, isLoading } = useSelector(
    (state) => state?.productReducer
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [productEdit, setProductEdit] = useState("");
  const [show, setShow] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const { listCategory } = useSelector((state) => state?.categoryReducer);

  const handleFilter = ({ key }) => {
    dispatch(actGetProductByFilter({ categoryId: key }));
  };
  const handleFilterShow = ({ key }) => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllCategory());
    setShow(key);
  };
  const menuShow = (
    <Menu
      onClick={handleFilterShow}
      items={[
        { label: "5 items", key: 5 },
        { label: "10 items", key: 10 },
        { label: "20 items", key: 20 },
      ]}
    />
  );
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
            <button className="btn btn-danger">Delete</button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
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
  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
    // dispatch(actGetProductByCat({ q: searchValue }));
  };
  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(actGetProductByFilter({ q: searchValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <>
      <ToastContainer />

      <div className="container-fluid mt-5">
        <h1>Products</h1>
        <div className="col-12 pb-4 mt-2">
          <Dropdown overlay={menuShow} className="col-sm">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Button>Show</Button>
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={menu} className="col-sm">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Button>Categories</Button>
              </Space>
            </a>
          </Dropdown>
          <Input
            autoFocus
            defaultValue={searchValue}
            placeholder="default size"
            prefix={<SearchOutlined />}
            style={{ width: "30%" }}
            className="col-sm"
            onChange={(e) => handleInputSearch(e)}
          />

          <button
            className="btn btn-success float-right col-sm"
            onClick={() => showModalAdd()}
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
        {isLoading ? (
          <div className="loading-display">
            <Spin indicator={sharinganIcon} />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={listProducts}
            rowKey="id"
            className="table-style"
            pagination={{ defaultPageSize: show }}
          />
        )}
      </div>
    </>
  );
}
