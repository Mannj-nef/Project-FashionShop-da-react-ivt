/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Table, Space, Spin } from "antd";
import { actGetAllUser } from "../../../redux/actions/userAction";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserById } from "../../../apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { sharinganIcon } from "../../../components/Loading";
import { SUCCESS_MESSAGE } from "../../../common/message";
import ModalUser from "./ModalUser";

export default function Users() {
  const { listUser, isLoading } = useSelector((state) => state?.userReducer);

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [userEdit, setUserEdit] = useState("");

  const showModalAdd = () => {
    setModalTitle("Add");
    setIsModalVisible(true);
  };
  const showModalEdit = (user) => {
    setUserEdit(user);
    setModalTitle("Edit");
    setIsModalVisible(true);
  };

  const handleDeleteUser = async (user) => {
    toast.success(SUCCESS_MESSAGE.DELETE_SUCCESS, { autoClose: 1000 });
    await deleteUserById(user.id);
    dispatch(actGetAllUser());
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
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
            onClick={() => handleDeleteUser(record)}
            style={{ fontSize: "1.6rem" }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(actGetAllUser());
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
            <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Users</h1>

            <button
              className="btn btn-success"
              onClick={() => showModalAdd()}
              style={{ fontSize: "1.6rem" }}
            >
              Add User
            </button>
            <ModalUser
              modalTitle={modalTitle}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              userEdit={userEdit}
            />
          </div>
          <Table
            columns={columns}
            dataSource={listUser}
            rowKey="id"
            className="table-style"
          />
          ;
        </div>
      )}
    </>
  );
}
