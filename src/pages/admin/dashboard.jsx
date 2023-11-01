import {NavbarAdmin} from "../../components/navbar";
import { Account } from "../../components/account";
import ProductForm from "../../components/productForm";
import ProductTable from "../../components/productTable";
import { useState } from "react";
import SideBar from "../../components/sidebar";
import Product from "../../components/product";

export default function Dashboard(props) {
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <ContentBox></ContentBox>
    </div>
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


function Content(props) {
  const { product, account } = props.content;
  return (
    <div style={content}>
      {product && <Product></Product>}
      {account && <Account></Account>}
    </div>
  );
}

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


