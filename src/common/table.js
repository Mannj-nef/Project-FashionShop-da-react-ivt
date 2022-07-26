import { Tag } from "antd";
import { toast } from "react-toastify";
import { Status } from "./types";

export const layout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

export const layoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 6,
    },
  },
};

export const config = {
  ruleCat: [
    {
      required: true,
      message: "Please input category name!",
    },
  ],
  ruleProductName: [
    {
      required: true,
      message: "Please input product name!",
    },
  ],
  rulePrice: [
    {
      required: true,
      message: "Please input price!",
    },
  ],
  ruleSales: [
    {
      required: true,
      message: "Please input sales!",
    },
  ],
  ruleQuantity: [
    {
      required: true,
      message: "Please input quantity!",
    },
  ],
  ruleDescription: [
    {
      required: true,
      message: "Please input description!",
    },
  ],
  ruleImage: [
    {
      required: true,
      message: "Please input image!",
    },
  ],
  ruleEmail: [
    {
      required: true,
      message: "Please input email!",
    },
    {
      type: "email",
      message: "Please input valid email",
    },
  ],
  ruleFullName: [
    {
      required: true,
      message: "Please input full name!",
    },
  ],
  rulePassword: [
    {
      required: true,
      message: "Please input password!",
    },
  ],
  ruleRole: [
    {
      required: true,
      message: "Please input role!",
    },
  ],
  ruleSize: [
    {
      required: true,
      message: "Please select size!",
      type: "array",
    },
  ],
  ruleColor: [
    {
      required: true,
      message: "Please select color!",
      type: "array",
    },
  ],
  ruleGender: [
    {
      required: true,
      message: "Please select gender!",
    },
  ],
  ruleAddress: [
    {
      required: true,
      message: "Please input address!",
    },
  ],
};

export const columnsAll = {
  columnCat: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
  ],
  columnPro: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      width: "30%",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={image} style={{ width: "100px", height: "100px" }}></img>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (_, record) => <div>{record.price}$</div>,
    },
    {
      title: "Sales",
      key: "sales",
      dataIndex: "sales",
      sorter: (a, b) => a.sales - b.sales,
      render: (_, record) => <div>{record.sales}%</div>,
    },
  ],
  columnUser: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
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
      sorter: (a, b) => a.role - b.role,
    },
  ],
  columnOrder: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },

    {
      title: "Full Name",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = "geekblue";

        if (status === Status.PROCESSING) {
          color = "geekblue";
        } else if (status === Status.SHIPPING) {
          color = "cyan";
        } else if (status === Status.DELIVERED) {
          color = "green";
        } else if (status === Status.CANCELED) {
          color = "red";
        }

        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
    },
  ],
  columnDetailOrder: [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },

    {
      title: "Product name",
      key: "productName",
      dataIndex: "productName",
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
      key: "price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Sales",
      key: "sales",
      dataIndex: "sales",
      sorter: (a, b) => a.sales - b.sales,
    },
    {
      title: "Total amount",
      key: "totalAmount",
      dataIndex: "totalAmount",
      sorter: (a, b) => a.totalAmount - b.totalAmount,
    },
  ],
};

export const cancel = () => {
  toast.error("Delete error", { autoClose: 1000 });
};
