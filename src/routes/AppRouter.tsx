import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route
            path="/register"
            element={<RegisterPage />}
            />

            <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
            />
        </Routes>
        </BrowserRouter>
    );
}