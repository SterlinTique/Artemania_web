import { useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "../../hooks/useToast";

import AuthLayout from "../../layouts/AuthLayout";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import RoleSelector from "../../components/auth/RoleSelector";
import TermsCheckbox from "../../components/auth/TermsCheckbox";
import TermsModal from "../../components/modals/TermsModal";


export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secretWord, setSecretWord] = useState("");
    const [description, setDescription] = useState("");

    const [role, setRole] = useState("cliente");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const toast = useToast();

    const handleRegister = () => {

        if (
            !name.trim() ||
            !email.trim() ||
            !password.trim() ||
            !secretWord.trim()
        ) {
            toast.warn(
                "Faltan Datos",
                "Completa todos los campos requeridos para crear tu cuenta artesanal 🎨"
            );

            return;
        }

        if (!acceptedTerms) {
            toast.warn(
                "Términos requeridos",
                "Debes aceptar los términos y condiciones para continuar."
            );

            return;
        }

        toast.success(
            "Registro exitoso",
            "Tu cuenta fue creada correctamente."
        );
    };

    return (
        <AuthLayout>
            <AuthCard>
                <AuthHeader
                title="Crear Cuenta"
                subtitle="Únete a la mejor comunidad de Arte"
                />

                <AuthInput
                label="Nombre *"
                placeholder="Tu nombre"
                value={name}
                onChange={setName}
                />

                <AuthInput
                label="Correo *"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={setEmail}
                />

                <AuthInput
                label="Contraseña *"
                type="password"
                placeholder="********"
                value={password}
                onChange={setPassword}
                />

                <AuthInput
                label="Palabra Secreta *"
                type="password"
                placeholder="Ej. tu color favorito"
                value={secretWord}
                onChange={setSecretWord}
                />

                <RoleSelector
                label="¿Qué tipo de usuario eres?"
                selectedRole={role}
                onSelectRole={setRole}
                />

                {role === "artesano" && (
                    <AuthInput
                        label="Descripción de tu trabajo (Opcional)"
                        placeholder="¿Qué te inspira a crear?"
                        value={description}
                        onChange={setDescription}
                        multiline
                    />
                )}

                <TermsCheckbox
                    checked={acceptedTerms}
                    onChange={setAcceptedTerms}
                    onOpenTerms={() => setShowTerms(true)}
                />

                <AuthButton 
                text="Registrarse" 
                onClick={handleRegister}
                />

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    ¿Ya tienes cuenta?{" "}
                    
                    <Link
                        to="/"
                        className="text-[#B96A4A] font-bold hover:underline"
                    >
                        Inicia sesión
                    </Link>
                </div>
            </AuthCard>
        <TermsModal
        visible={showTerms}
        onClose={(accepted) => {
            setShowTerms(false);

            if (accepted) {
            setAcceptedTerms(true);
            }
        }}
        />
        </AuthLayout>
    );
}