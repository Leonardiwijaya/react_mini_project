import { useCallback } from "react";
import { useState } from "react";
import { uploaderAPI } from "../configs/api-service";
import { uploaderConfig } from "../configs/uploader-config";
export default function UploadImage() {
  const [isLoading, setIsLoading] = useState(false);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadImage = useCallback(async (file, onSuccess) => {
    try {
      setIsLoading(true);
      const body = {
        file: await getBase64(file.file.originFileObj),
        upload_preset: uploaderConfig.upload_preset,
        public_id: file.file.name.replace(/\.[^.]*$/, ""),
        api_key: uploaderConfig.api_key,
      };
      const res = await uploaderAPI.post("/dvu15ohox/image/upload", body);
      if (res) {
        onSuccess && onSuccess(res.data);
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { uploadImage, isLoading };
}
