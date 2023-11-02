import { APIProduct } from "../apis/APIProduct";
import {
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  Select,
  Spin,
  Upload,
} from "antd";
import UploadImage from "../utils/uploadImage";
import { PlusOutlined } from "@ant-design/icons";

export default function ProductForm(props) {
  const { TextArea } = Input;
  const { image, setImage, edit, setEdit, setUpdate, formState } = props;
  const { uploadImage, isLoading: isLoadingUpload } = UploadImage();
  const onFinish = (values) => {
    values.image = image;
    if (edit.isEdit) {
      APIProduct.updateProduct(edit.idProduct, values);
    } else {
      APIProduct.addProduct(values);
    }
    setUpdate(true);
    formState.resetFields();
    setImage(null);
  };
  const handleUpload = async (file) => {
    uploadImage(file, (data) => {
      setImage(data.url);
    });
  };
  const cancelEdit = () => {
    setEdit({
      isEdit: false,
      idProduct: null,
    });
    formState.resetFields();
    setImage(null);
  };

  return (
    <>
      <h4>Create Product</h4>
      <Form
        form={formState}
        onFinish={(values) => {
          onFinish(values);
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
          <Select>
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
        <Form.Item label="Image">
          {isLoadingUpload ? (
            <div style={loadingImage}>
              <Spin tip="uploading..."></Spin>{" "}
            </div>
          ) : image ? (
            <div style={flexCenter}>
              <Image width={140} src={image} />
              <Button
                type="link"
                danger
                onClick={() => {
                  setImage(null);
                }}
                className="ml20"
              >
                Delete Image
              </Button>
            </div>
          ) : (
            <Upload
              showUploadList={true}
              name="file"
              maxCount={1}
              customRequest={() => {}}
              onChange={handleUpload}
              listType="picture-card"
            >
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
          )}
        </Form.Item>

        {edit?.isEdit ? (
          <div style={flexEnd}>
            <Button
              onClick={() => {
                cancelEdit();
              }}
              htmlType="button"
              style={{ marginRight: 15 }}
              disabled={false}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" disabled={false}>
              Update Product
            </Button>
          </div>
        ) : (
          <div style={flexEnd}>
            <>
              <Button
                type="primary"
                onClick={() => {
                  formState.submit();
                }}
              >
                Add Product
              </Button>
            </>
          </div>
        )}
      </Form>
    </>
  );
}

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

const loadingImage = {
  width: "140px",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.08)",
};

const flexEnd = {
  paddingLeft: "100px",
}