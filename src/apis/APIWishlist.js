import { AxiosError } from "axios";
import { axiosInstances } from "../configs/axiosInstance";

export const APIWishlist = {
  getWishlists: async (user_id) => {
    try {
      const result = await axiosInstances.get(`wishlist/?user_id=${user_id}`);
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

  addWishlist: async (data) => {
    try {
      await axiosInstances.post(`wishlist`, data);
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

  deleteWishlist: async (id) => {
    try {
      await axiosInstances.delete(`wishlist/${id}`);
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
