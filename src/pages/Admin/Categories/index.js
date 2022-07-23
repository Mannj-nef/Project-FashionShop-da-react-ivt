/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Modal, Form, Input, Popconfirm } from "antd";
import { actGetAllCategory } from "../../../redux/actions/categoryAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategory,
  deleteCategoryById,
  editCategory,
} from "../../../apis/categoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import "../style.scss";
import { cancel, columnsAll, config, layout } from "../../../common/table";
export default function Categories() {
  const { listCategory, isLoading } = useSelector(
    (state) => state?.categoryReducer
  );

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(actGetAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showModalAdd = () => {
    form.resetFields();
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (category) => {
    form.setFieldsValue(category);
    setCategoryEdit(category);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteCategory = async (category) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteCategoryById(category.id);
    dispatch(actGetAllCategory());
  };
  const handleSubmit = async (category) => {
    if (modalTitle === "Add") {
      await listCategory.map((cat) => {
        if (category.categoryName === cat.categoryName) {
          console.log(category.categoryName + "&&" + cat.categoryName);
          setIsValid(false);
        }
      });
      if (isValid) {
        await addCategory(category);
        toast.success(SUCCESS_MESSAGE.STATUS_200);
        dispatch(actGetAllCategory());
        form.resetFields();
        setIsModalVisible(false);
      }
    } else {
      await editCategory(category, categoryEdit.id);
      toast.success(SUCCESS_MESSAGE.EDIT_SUCCESS, { autoClose: 1000 });
      dispatch(actGetAllCategory());
      setIsModalVisible(false);
    }
  };

  const columns = [
    ...columnsAll.columnCat,
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
            title="Are you sure to delete this category?"
            onConfirm={() => handleDeleteCategory(record)}
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

  return (
    <>
      <ToastContainer />
      <div className="loading-display">
        <Spin indicator={sharinganIcon} spinning={isLoading} size="large" />
      </div>
      <div className="container-fluid mt-5">
        <div className="title">
          <h1>Categories</h1>
          <button className="btn btn-success" onClick={() => showModalAdd()}>
            Add Category
          </button>
          <Modal
            title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
            visible={isModalVisible}
            onOk={() => form.submit()}
            onCancel={handleCancel}
          >
            <Form {...layout} form={form} onFinish={handleSubmit}>
              <Form.Item
                label="Name"
                name={["categoryName"]}
                rules={[...config.ruleCat]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <Table
          columns={columns}
          dataSource={listCategory}
          rowKey="id"
          className="table-style"
        />
        ;
      </div>
    </>
  );
}
