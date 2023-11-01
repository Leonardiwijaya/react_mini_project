import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIAdmin = {
  getAdmin: async (email) => {
    try {
      const result = await axiosInstance.get(`admin/?email=${email}`);
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
};
