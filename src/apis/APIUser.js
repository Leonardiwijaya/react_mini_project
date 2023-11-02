import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIUser = {
  getUser: async (email) => {
    try {
      const result = await axiosInstance.get(`user/?email=${email}`); 
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

  addUser: async (data) => {
    try {
      await axiosInstance.post(`user`, data);
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
