import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/system/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
    return (
        <Routes>
                {/* Rutas públicas */}
            <Route path="/" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            <Route
            path="/register"
            element={
                <PublicRoute>
                    <RegisterPage />
                </PublicRoute>
            }
            />

            <Route
            path="/forgot-password"
            element={
                <PublicRoute>
                    <ForgotPasswordPage />
                </PublicRoute>
            }
            />

             {/* Rutas protegidas */}
             {/* App */}
            
            <Route element={<MainLayout />}>

                <Route
                    path="/home"
                    element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                    }
                />

            </Route>    
        </Routes>   
    );
}