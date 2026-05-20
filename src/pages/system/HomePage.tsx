import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { logoutUser } from "../../services/auth";

import { useToast } from "../../hooks/useToast";

export default function HomePage() {

    const navigate = useNavigate();

    const toast = useToast();

    const {
        profile,
    } = useAuth();

    const handleLogout = async () => {

        const result =
        await logoutUser();

        if (result.success) {

            toast.success(
                "Sesión cerrada",
                "Hasta pronto artesano 👋"
            );

            navigate("/");

        } else {

            toast.error(
                "Error",
                result.error ||
                "No pudimos cerrar sesión."
            );

        }
    };

    const isArtisan =
    profile?.tipo === "Artesano";

    return (
        <div className="space-y-8">

            {/* Welcome */}
            <section className="bg-gradient-to-r from-[#B96A4A] to-[#D38A68] rounded-3xl p-8 text-white shadow-lg">
                
                <h1 className="text-4xl font-black mb-2">
                    Bienvenido,
                    {" "}
                    {profile?.nombre?.split(" ")[0] || "Artesano"} 👋
                </h1>

                <p className="text-white/90 text-lg">
                    Explora la comunidad artesanal más creativa.
                </p>

            </section>

            {/* Profile Card */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E2D9]">

                <div className="flex flex-col md:flex-row md:items-center gap-6">

                    {/* Avatar */}
                    <div className="w-28 h-28 rounded-full bg-[#F4E6DE] flex items-center justify-center text-4xl">
                        👤
                    </div>

                    {/* Info */}
                    <div className="flex-1">

                        <h2 className="text-3xl font-black text-gray-800">
                            {profile?.nombre}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {profile?.email}
                        </p>

                        <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-[#F4E6DE] text-[#B96A4A] font-bold text-sm">
                            {profile?.tipo}
                        </div>

                    </div>

                </div>

            </section>

            {/* Artisan Banner */}
            {!isArtisan && (
                <section className="bg-[#B96A4A] rounded-3xl p-6 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-lg">

                    <div>
                        <h3 className="text-2xl font-black mb-2">
                            ¿Eres artesano?
                        </h3>

                        <p className="text-white/90">
                            Empieza a vender tus obras y comparte tu talento con el mundo.
                        </p>
                    </div>

                    <button className="bg-white text-[#B96A4A] px-6 py-3 rounded-2xl font-bold hover:opacity-90 transition">
                        Convertirme en Artesano
                    </button>

                </section>
            )}

            {/* Quick Actions */}
            <section>

                <h3 className="text-2xl font-black text-gray-800 mb-5">
                    Accesos rápidos
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                    <button className="bg-white border border-[#E8E2D9] rounded-3xl p-6 text-left hover:shadow-md transition">
                        <div className="text-4xl mb-4">
                            🛍️
                        </div>

                        <h4 className="font-black text-lg text-gray-800">
                            Marketplace
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                            Descubre productos únicos.
                        </p>
                    </button>

                    <button className="bg-white border border-[#E8E2D9] rounded-3xl p-6 text-left hover:shadow-md transition">
                        <div className="text-4xl mb-4">
                            🎨
                        </div>

                        <h4 className="font-black text-lg text-gray-800">
                            Comunidad
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                            Comparte tus creaciones.
                        </p>
                    </button>

                    <button className="bg-white border border-[#E8E2D9] rounded-3xl p-6 text-left hover:shadow-md transition">
                        <div className="text-4xl mb-4">
                            💬
                        </div>

                        <h4 className="font-black text-lg text-gray-800">
                            Chats
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                            Conecta con artesanos.
                        </p>
                    </button>

                    <button className="bg-white border border-[#E8E2D9] rounded-3xl p-6 text-left hover:shadow-md transition">
                        <div className="text-4xl mb-4">
                            👤
                        </div>

                        <h4 className="font-black text-lg text-gray-800">
                            Perfil
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                            Administra tu cuenta.
                        </p>
                    </button>

                </div>

            </section>

            {/* Logout */}
            <section className="pt-4">

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-4 rounded-2xl font-bold"
                >
                    Cerrar Sesión
                </button>

            </section>

        </div>
    );
}