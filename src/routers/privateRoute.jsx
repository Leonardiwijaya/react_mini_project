import React from "react";
import {auth,  authAdmin } from "../utils/auth";
import { Navigate, Outlet} from "react-router-dom";

export function PrivateRoute() {
	let path = "/login";

	if (auth.isAuthorized()) {
		return <Outlet />;
	}

	return <Navigate to={path} />;
}

export function AdminPrivateRoute() {
	let path = "/admin/login";

	if (authAdmin.isAuthorized()) {
		return <Outlet />;
	}

	return <Navigate to={path} />;
}
