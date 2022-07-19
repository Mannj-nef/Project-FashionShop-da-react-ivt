import React, { useEffect } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { addProduct, editProduct } from "../../../apis/productApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import { SUCCESS_MESSAGE } from "../../../common/message";

export default function ModalProduct(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, productEdit } = props;
  const { listCategory } = useSelector((state) => state?.categoryReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(productEdit);
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productEdit]);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const handleSubmit = async (product) => {
    if (modalTitle === "Add") {
      await addProduct(product);
      toast.success(SUCCESS_MESSAGE.STATUS_200);
      dispatch(actGetAllProduct());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      await editProduct(product, productEdit.id);
      toast.success("Edit success");
      dispatch(actGetAllProduct());
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
          label="Name"
          name={["productName"]}
          rules={[
            {
              required: true,
              message: "Please input product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name={["price"]}
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} max={100000000000} />
        </Form.Item>

        <Form.Item
          label="Sales"
          name={["sales"]}
          rules={[
            {
              required: true,
              message: "Please input sales!",
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name={["quantity"]}
          rules={[
            {
              required: true,
              message: "Please input quantity!",
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item
          name={["categoryId"]}
          label="Category"
          rules={[
            {
              required: true,
              message: "Please input category name!",
            },
          ]}
        >
          <Select placeholder="Please select a category">
            {listCategory.map((cat) => {
              return (
                <Select.Option value={cat.id} key={cat.id}>
                  {cat.categoryName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["image"]}
          label="Image"
          rules={[
            {
              required: true,
              message: "Please input image!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
