import styles from "../../assets/css/style.module.css";
import { Input, Button, Select } from "antd";
import {
  PlusOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Form, InputNumber, Upload, Space, Table, Image } from "antd";
import { APIProduct } from "../../apis/APIProduct";
import { authAdmin } from "../../utils/auth";
import Logo from "../../components/logo";

function ProductForm() {
  const onSubmit = (values) => {
    APIProduct.addProduct(values);
  };
  const { TextArea } = Input;
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <h4>Create Product</h4>
      <Form
        onFinish={(values) => {
          onSubmit(values);
        }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["category"]} label="Category">
          <Select defaultValue="Pria">
            <Select.Option value="Pria">Pria</Select.Option>
            <Select.Option value="Wanita">Wanita</Select.Option>
            <Select.Option value="Anak">Anak</Select.Option>
            <Select.Option value="Bayi">Bayi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={["brand"]} label="Brand">
          <Input />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name={["price"]} label="Price">
          <InputNumber />
        </Form.Item>
        <Form.Item name={["stock"]} label="Stock">
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create Product
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default function Dashboard(props) {
  console.log(authAdmin.isAuthorized());
  return (
    <div style={{}}>
      <NavBar></NavBar>
      <ContentBox></ContentBox>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav style={navbar}>
      <Logo></Logo>
    </nav>
  );
}
function ContentBox(props) {
  const [content, setContent] = useState({ product: true, account: false });
  const changeContent = (key) => {
    if (key === "product") {
      setContent({ product: true, account: false });
    } else {
      setContent({ product: false, account: true });
    }
  };
  return (
    <div style={contentBox}>
      <SideBar onClick={changeContent} content={content}></SideBar>
      <Content content={content}></Content>
    </div>
  );
}

function SideBar(props) {
  const { onClick, content } = props;
  return (
    <div className={styles["sideBar"]}>
      <ul className={styles["list-menu"]}>
        <li
          className={styles[content.product ? "menu-item-active" : "menu-item"]}
          onClick={() => onClick("product")}
        >
          <ShoppingOutlined />
          <span className={styles["menu-title"]}>Product</span>
        </li>
        <li
          className={styles[content.account ? "menu-item-active" : "menu-item"]}
          onClick={() => onClick("account")}
        >
          <UserOutlined />
          <span className={styles["menu-title"]}>Account</span>
        </li>
      </ul>
    </div>
  );
}

function Product(props) {
  return (
    <div style={{ margin: "30px" }}>
      <ProductForm></ProductForm>
      <ListProduct></ListProduct>
    </div>
  );
}
function ListProduct(props) {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const deleteProduct = (id) => {
    APIProduct.deleteProduct(id);
    setRefresh(true);
  };
  useEffect(() => {
    APIProduct.getProducts().then(setProducts);
    setRefresh(false);
  }, [refresh]);
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
          <Button>Edit</Button>
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

function Content(props) {
  const { product, account } = props.content;
  return (
    <div style={content}>
      {product && <Product></Product>}
      {account && <Account></Account>}
    </div>
  );
}

function Account(props) {
  const admin = authAdmin.isAuthorized();
  return (
    <div style={{ margin: "30px" }}>
      <h4>Account info</h4>
      <table>
        <tr>
          <td style={td1}>Name:</td>
          <td style={td2}>{admin.name}</td>
        </tr>
        <tr>
          <td style={td1}>Email:</td>
          <td style={td2}>{admin.email}</td>
        </tr>
        <tr>
          <td style={td1}>Phone:</td>
          <td style={td2}>{admin.phone}</td>
        </tr>
        <tr>
          <td style={td1}>Role:</td>
          <td style={td2}>{admin.role}</td>
        </tr>
      </table>
      <Button
        type="primary"
        htmlType="button"
        onClick={() => {
          authAdmin.logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

const navbar = {
  width: "100%",
  height: "64px",
  boxSizing: "border-box",
  padding: "0 30px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  boxShadow: "0 1px 2px #00000008,0 1px 6px -1px #00000005,0 2px 4px #00000005",
  position: "fixed",
  zIndex: "10",
};

const contentBox = {
  height: "100%",
  width: "100%",
  display: "flex",
  position: "fixed",
  top: 63,
};

const content = {
  width: "100%",
  height: "100%",
  paddingBottom: "10px 0px 100px 0px",
  overflow: "auto",
};

const td1 = {
  color: "grey",
};

const td2 = {
  paddingLeft: "5px",
};
