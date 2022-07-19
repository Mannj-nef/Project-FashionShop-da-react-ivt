import React, { useEffect } from "react";
import { Form, Input, Modal, Select } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SUCCESS_MESSAGE } from "../../../common/message";
import { actGetAllUser } from "../../../redux/actions/userAction";
import { addUser, editUser } from "../../../apis/userApi";

export default function ModalUser(props) {
  const { Option } = Select;
  const { isModalVisible, setIsModalVisible, modalTitle, userEdit } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalTitle === "Edit") {
      form.setFieldsValue(userEdit);
    } else if (modalTitle === "Add") {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEdit]);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const handleSubmit = async (user) => {
    if (modalTitle === "Add") {
      await addUser(user);
      toast.success(SUCCESS_MESSAGE.STATUS_200);
      dispatch(actGetAllUser());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      await editUser(user, userEdit.id);
      toast.success("Edit success");
      dispatch(actGetAllUser());
      setIsModalVisible(false);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Email"
          name={["email"]}
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Full Name"
          name={["fullName"]}
          rules={[
            {
              required: true,
              message: "Please input full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={["password"]}
          rules={[
            {
              required: true,
              message: "Please input password!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a role" allowClear>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
