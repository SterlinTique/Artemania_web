import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

interface PublicRouteProps {
    children: React.ReactNode;
}

export default function PublicRoute({
    children,
}: PublicRouteProps) {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F5F1]">
                <p className="text-[#B96A4A] font-semibold text-lg">
                    Cargando Artemanía...
                </p>
            </div>
        );
    }

    // Si YA inició sesión
    if (user) {
        return <Navigate to="/home" replace />;
    }

    return children;
}