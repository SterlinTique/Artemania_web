import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: ProtectedRouteProps) {

    const { user, loading } = useAuth();

    // Mientras Firebase verifica sesión
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F5F1]">
                <p className="text-[#B96A4A] font-semibold text-lg">
                    Cargando Artemanía...
                </p>
            </div>
        );
    }

    // Si NO hay usuario -> login
    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
}