import { AxiosError } from "axios";
import { axiosInstances } from "../configs/axiosInstance";

export const APIProduct = {
  getProduct: async (id) => {
    try {
      const result = await axiosInstances.get(`product/?id=${id}`);
      return result.data[0] ?? null;
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

  getProducts: async () => {
    try {
      const result = await axiosInstances.get("product");
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

  searchProducts: async (search) => {
    try {
      const result = await axiosInstances.get(`product/?search=${search}`);
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

  getProductsByCategory: async (category) => {
    try {
      const result = await axiosInstances.get(`product/?category=${category}`);
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
      await axiosInstances.post(`product`, data);
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
      await axiosInstances.put(`product/${id}`, data);
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
      await axiosInstances.delete(`product/${id}`);
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
