import { Button, Image, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { APIProduct } from "../apis/APIProduct";

export default function ProductTable(props) {
  const { handleEdit, update, setUpdate } = props;
  const [products, setProducts] = useState([]);
  const deleteProduct = (id) => {
    APIProduct.deleteProduct(id);
    setUpdate(true);
  };
  useEffect(() => {
    APIProduct.getProducts().then(setProducts);
    setUpdate(false);
  }, [update]);
  const pageSize = 10; // Number of rows per page
  let currentPage = 1;
  const columns = [
    {
      title: "No",
      key: "index",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text) => <Image width={50} src={text} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Stock",
      key: "stock",
      dataIndex: "stock",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "id",
      render: (data) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleEdit(data);
            }}
          >
            Edit
          </Button>
          <Button danger onClick={() => deleteProduct(data.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ marginTop: "150px", marginBottom: "150px" }}>
      <h4>List Product</h4>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{
          onChange: (page) => {
            currentPage = page; // Update the current page number
          },
        }}
        rowKey={(record, index) => index}
      />
    </div>
  );
}
