import { Tag } from "antd";
import { toast } from "react-toastify";
import { PaymentTypes, Status } from "./types";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
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
  rulePhone: [
    {
      required: true,
      message: "Please input your phone!",
    },
  ],

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
  ruleRate: [
    {
      required: true,
      message: "Please choose star!",
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
      title: "Sold",
      key: "sold",
      dataIndex: "sold",
      sorter: (a, b) => a.sold - b.sold,
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
        let icon = "";
        if (status === Status.PROCESSING) {
          color = "processing";
          icon = <SyncOutlined spin />;
        } else if (status === Status.SHIPPING) {
          color = "cyan";
          icon = <ClockCircleOutlined spin/>;
        } else if (status === Status.DELIVERED) {
          color = "success";
          icon = <CheckCircleOutlined />;
        } else if (status === Status.CANCELED) {
          color = "error";
          icon = <CloseCircleOutlined />;
        }

        return (
          <Tag icon={icon} color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Payment",
      key: "payment",
      dataIndex: "payment",
      render: (payment) => {
        let color = "geekblue";

        if (payment === PaymentTypes.MOMO) {
          color = "magenta";
        } else if (payment === PaymentTypes.PAYPAL) {
          color = "blue";
        } else if (payment === PaymentTypes.VISA) {
          color = "purple";
        } else if (payment === PaymentTypes.BANK) {
          color = "green";
        }

        return (
          <Tag color={color} key={payment}>
            {payment}
          </Tag>
        );
      },
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      render: (_, record) => (
        <div>{record.total}$</div>
      ),
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
      render: (_, record) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <div>{record.price}$</div>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    // {
    //   title: "Sales",
    //   key: "sales",
    //   dataIndex: "sales",
    //   sorter: (a, b) => a.sales - b.sales,
    // },
    
  ],
};

export const cancel = () => {
  toast.error("Delete error", { autoClose: 1000 });
};
