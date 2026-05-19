import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useToast } from "../../hooks/useToast";

import { FaLockOpen, FaInfoCircle } from "react-icons/fa";

import AuthLayout from "../../layouts/AuthLayout";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [secretWord, setSecretWord] = useState("");

    const toast = useToast();

    const handleVerify = () => {

        if (
            !email.trim() ||
            !secretWord.trim()
        ) {
            toast.warn(
                "Campos incompletos",
                "Necesitamos tu correo y tu palabra secreta para verificar tu identidad 🔑"
            );

            return;
        }

        toast.success(
            "Verificación enviada",
            "La recuperación de contraseña se integrará próximamente."
        );
    };

    return (
        <AuthLayout>

            <AuthCard>
                {/* Back Button */}
                <div className="w-full max-w-md mb-4">
                    <Link
                        to="/"
                        className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#E8E2D9] flex items-center justify-center hover:bg-[#FAF7F4] transition"
                    >
                        <FaArrowLeft
                            size={16}
                            className="text-[#B96A4A]"
                        />
                    </Link>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#F4E6DE] flex items-center justify-center">
                        <FaLockOpen
                            size={36}
                            className="text-[#B96A4A]"
                        />
                    </div>
                </div>

                <AuthHeader
                title="Recuperar Cuenta"
                subtitle="Verifica tu identidad con tu palabra secreta"
                />

                <AuthInput
                label="Correo"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={setEmail}
                />

                <AuthInput
                label="Palabra Secreta"
                type="password"
                placeholder="Tu palabra secreta"
                value={secretWord}
                onChange={setSecretWord}
                />

                <AuthButton 
                text="Verificar Cuenta" 
                onClick={handleVerify}
                />

                <div className="flex items-start gap-3 mt-6 p-4 rounded-xl border border-[#E8E2D9] bg-[#FAF7F4]">
                    <FaInfoCircle
                        className="text-gray-500 mt-1"
                        size={18}
                    />

                    <p className="text-sm text-gray-500 leading-5">
                        Si los datos coinciden, enviaremos un enlace seguro
                        a tu correo oficial para cambiar la contraseña.
                    </p>
                </div>
            </AuthCard>
        </AuthLayout>
    );
}