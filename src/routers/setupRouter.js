import { Route, Routes } from "react-router-dom";
import Login from "../pages/admin/login";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import Dashboard from "../pages/admin/dashboard";
import Product from "../pages/product";
import ProductList from "../pages/productList";
import Wishlist from "../pages/wishlist";

export default function SetupRouter() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="/products/:name" element={<ProductList/>}></Route>
                <Route path="/wishlist" element={<Wishlist/>}></Route>
            </Route>
            <Route path="/admin">
                <Route path="/admin" element={<Login/>}></Route>
                <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    );
}