import Cookies from "js-cookie";

const auth = {
	isAuthorized() {
		return Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
	},
	setData(data) {
		Cookies.set('user', JSON.stringify(data));
	},
	logout() {
		window.location.href = "/login";
		return Cookies.remove("user");
	},
};

const authAdmin = {
	isAuthorized() {
		return Cookies.get('admin') ? JSON.parse(Cookies.get('admin')) : null;
	},
	setData(data) {
		Cookies.set('admin', JSON.stringify(data));
	},
	logout() {
		window.location.href = "/admin/login";
		Cookies.remove('admin');
	},
};
export {auth, authAdmin} ;
