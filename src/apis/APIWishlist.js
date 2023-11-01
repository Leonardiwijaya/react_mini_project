import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIProduct = {
  getProducts: async () => {
    try {
      const result = await axiosInstance.get("product");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  addProduct: async (data) => {
    try {
      await axiosInstance.post(`product`, data);
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  updateProduct: async (id, data) => {
    try {
      await axiosInstance.put(`product/${id}`, data);
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
  deleteProduct: async (id) => {
    try {
      await axiosInstance.delete(`product/${id}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
};
