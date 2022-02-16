import React, { useState, useEffect } from "react";
import { Space, Table, Skeleton } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
// import allAvailableProducts from "../../assets/constants/product.json"
import agricultureProductApis from "../../services/agricultureProductApis";

import { Popconfirm, message } from "antd";

function confirm(e) {
  console.log(e);
  message.success("product deleted");
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

const columns = [
  {
    title: "PRODUCT NAME",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "AVAILABLE QUANTITY",
    dataIndex: "available_quantity",
    key: "available_quantity",
  },
  {
    title: "POSTED DATE",
    dataIndex: "posted_date",
    key: "posted_date",
  },
  {
    title: "EXPIRATION DATE",
    dataIndex: "expired_date",
    key: "expired_date",
  },
  // {

  //     title: "Phone",
  //     dataIndex: "seller_phone",
  //     key: "seller_phone",
  // },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Actions",
    key: " actions",
    fixed: "right",
    width: 100,
    render: () => (
      <Space size="middle">
        <a>
          {" "}
          <EyeOutlined />{" "}
        </a>
        <a href="">
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" ><DeleteOutlined /></a>
          </Popconfirm>

        </a>

        <a href="">
          <EditOutlined />{" "}
        </a>
      </Space>
    ),
  },
];

const AllProduct = () => {
  const [getAllProducts, setGetAllProducts] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllProducts().then((res) => {
      console.log(res);
      setGetAllProducts(res.data.data);
    });
  }, []);

  return (
    <>
      <h1>All products:</h1>
      {getAllProducts.length == 0 ? (
        <Skeleton active></Skeleton>
      ) : (
        <Table
          className="bg-dark"
          columns={columns}
          dataSource={getAllProducts}
        />
      )}
    </>
  );
};

export default AllProduct;
