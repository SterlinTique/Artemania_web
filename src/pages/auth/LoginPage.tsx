import { useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "../../hooks/useToast";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/auth";

import AuthLayout from "../../layouts/AuthLayout";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email.trim() || !password.trim()) {
            toast.warn(
                "Campos Vacíos",
                "Necesitamos tu correo y contraseña para abrirte las puertas del taller 🔑"
            );

            return;
        }

        try {

            setLoading(true);

            const result = await loginUser(
                email,
                password
            );

            if (result.error) {

                toast.error(
                    "Error al iniciar sesión",
                    result.error
                );

                return;
            }

            toast.success(
                "Inicio exitoso",
                "Bienvenido nuevamente a Artemanía 🎨"
            );

            navigate("/home");

        } catch {

            toast.error(
                "Error inesperado",
                "Ocurrió un problema al iniciar sesión."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <AuthLayout>
        <AuthCard>
            <AuthHeader
            title="Bienvenido"
            subtitle="Ingresa a tu cuenta para continuar"
            />

            <AuthInput
            label="Correo"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={setEmail}
            />

            <AuthInput
            label="Contraseña"
            type="password"
            placeholder="********"
            value={password}
            onChange={setPassword}
            />

            {/* Forgot Password */}
            <div className="flex justify-end mb-5">
            <Link
                to="/forgot-password"
                className="text-sm text-[#B96b4d] font-semibold hover:underline"
            >
                ¿Olvidaste tu contraseña?
            </Link>
            </div>

            <AuthButton 
            text={loading? "Ingresando...": "Iniciar Sesión"} 
            onClick={handleLogin}
            />

            {/* Register */}
            <div className="mt-6 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link
                to="/register"
                className="text-[#B96b4d] font-bold hover:underline"
            >
                Regístrate
            </Link>
            </div>
        </AuthCard>
        </AuthLayout>
    );
}