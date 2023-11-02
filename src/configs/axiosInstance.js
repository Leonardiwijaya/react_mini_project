import axios from "axios";
//User and Admin
export const axiosInstance = axios.create({
	baseURL: "https://652f8cbc0b8d8ddac0b2aa9c.mockapi.io/",
	headers: {
	},
});

//Product and Wishlist
export const axiosInstances = axios.create({
	baseURL: "https://6537d397a543859d1bb0ea3f.mockapi.io/",
	headers: {

	},
})