import { Table } from "antd";
import React from "react";
import { columnsAll } from "../../common/table";

const TableOrder = ({ listOrder }) => {
  const columns = [...columnsAll.columnDetailOrder];

  return (
    <Table
      columns={columns}
      dataSource={Array.isArray(listOrder) && listOrder.length > 0 && listOrder}
      rowKey="id"
      className="table-style table-order"
      pagination={true}
    ></Table>
  );
};

export default TableOrder;
