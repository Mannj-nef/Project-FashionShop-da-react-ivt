import React from "react";
import { Form, Input, InputNumber, Modal } from "antd";
import { addProduct } from "../../../apis/productApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import { SUCCESS_MESSAGE } from "../../../common/message";

export default function ModalProduct(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, productEdit } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
    form.setFieldsValue({ productName: productEdit.productName });  

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const handleSubmit = (product) => {
    if (modalTitle === "Add") {
      addProduct(product);
      toast.success(SUCCESS_MESSAGE.STATUS_200);
      dispatch(actGetAllProduct());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      console.log(product);
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
      <Form {...layout} form={form} onFinish={handleSubmit} >
        <Form.Item label="Name" name={["productName"]} >
          <Input />
        </Form.Item>
        <Form.Item label="Quantity" name={["quantity"]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Description" name={["description"]}>
          <Input />
        </Form.Item>
        <Form.Item label="Price" name={["price"]}>
          <Input />
        </Form.Item>
        <Form.Item label="Sales" name={["sales"]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
