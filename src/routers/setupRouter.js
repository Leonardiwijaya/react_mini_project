import { Route, Routes } from "react-router-dom";
import Login from "../pages/admin/login";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";

export default function SetupRouter() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />}></Route>
            </Route>
            <Route path="/admin">
                <Route path="/admin" element={<Login/>}></Route>
                <Route path="/admin/dashboard" element={<Home />}></Route>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    );
}