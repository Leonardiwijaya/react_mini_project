import { Form } from "antd";
import ProductForm from "./productForm";
import ProductTable from "./productTable";
import { useState } from "react";

export default function Product(props) {
  const [image, setImage] = useState(null);
  const [update, setUpdate] = useState(false);
  const [edit, setEdit] = useState({
    isEdit: false,
    idProduct: null,
  });
  const [formState] = Form.useForm();
  const handleEdit = (data) => {
    setEdit({
      isEdit: true,
      idProduct: data.id,
    });
    setImage(data.image);
    const body = {
      name: data.name,
      category: data.category,
      brand: data.category,
      description: data.description,
      price: data.price,
      stock: data.stock,
    };
    formState.setFieldsValue(body);
  }
    return (
      <div style={{ margin: "30px" }}>
      <ProductForm
        image={image}
        setImage={setImage}
        edit={edit}
        setEdit={setEdit}
        formState={formState}
        setUpdate={setUpdate}
      />
      <ProductTable handleEdit={handleEdit} update={update} setUpdate={setUpdate}/>
      </div>
    );
  }