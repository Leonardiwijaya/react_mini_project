import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/admin/adminLogin";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import Dashboard from "../pages/admin/dashboard";
import Product from "../pages/product";
import Products from "../pages/products";
import Wishlist from "../pages/wishlist";
import Register from "../pages/register";
import Login from "../pages/login";
import { AdminProtectedRoute, ProtectedRoute } from "./protectedRoute";
import { AdminPrivateRoute, PrivateRoute } from "./privateRoute";
import Search from "../pages/search";
import Chat from "../pages/chat";

export default function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/chat" element={<Chat/>}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/products/:name" element={<Products />}></Route>
      <Route path="/products/search/:search" element={<Search />}></Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
      <Route path="/admin" element={<AdminPrivateRoute />}>
        <Route path="/admin" element={<Dashboard />}></Route>
      </Route>
      <Route path="/" element={<AdminProtectedRoute />}>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
