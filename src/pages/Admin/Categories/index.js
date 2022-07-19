import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Modal, Form, Input } from "antd";
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
export default function Categories() {
  const { listCategory, isLoading } = useSelector(
    (state) => state?.categoryReducer
  );
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
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
      await addCategory(category);
      toast.success(SUCCESS_MESSAGE.STATUS_200);
      dispatch(actGetAllCategory());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      await editCategory(category, categoryEdit.id);
      toast.success(SUCCESS_MESSAGE.EDIT_SUCCESS, { autoClose: 1000 });
      dispatch(actGetAllCategory());
      setIsModalVisible(false);
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "categoryName",
      key: "categoryName",
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
            onClick={() => handleDeleteCategory(record)}
            style={{ fontSize: "1.6rem" }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };

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
            <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Categories</h1>
            <button
              className="btn btn-success"
              onClick={() => showModalAdd()}
              style={{ fontSize: "1.6rem" }}
            >
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
                  rules={[
                    {
                      required: true,
                      message: "Please input category name!",
                    },
                  ]}
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
      )}
    </>
  );
}
