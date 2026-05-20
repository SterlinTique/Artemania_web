import { NavLink, useNavigate } from "react-router-dom";

import {
    FaPalette,
    FaHome,
    FaStore,
    FaUsers,
    FaShoppingCart,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../hooks/useAuth";

import { logoutUser } from "../../services/auth";

import { useToast } from "../../hooks/useToast";

export default function Sidebar() {

    const { profile } = useAuth();

    const navigate = useNavigate();

    const toast = useToast();

    const handleLogout = async () => {

        const result = await logoutUser();

        if (result.success) {

            toast.success(
                "Sesión cerrada",
                "Esperamos verte pronto 🎨"
            );

            navigate("/");

        } else {

            toast.error(
                "Error",
                result.error || "No pudimos cerrar sesión."
            );

        }
    };

    const linkStyle =
        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium";

    const activeStyle =
        "bg-[#B96A4A] text-white shadow";

    const inactiveStyle =
        "text-gray-700 hover:bg-[#F1E6DD]";

    return (
        <aside className="w-72 min-h-screen bg-white border-r border-[#E8E2D9] flex flex-col p-5">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#B96A4A] flex items-center justify-center shadow-md">
                    <FaPalette className="text-white text-xl" />
                </div>

                <div>
                    <h1 className="text-2xl font-black text-[#B96A4A]">
                        Artemanía
                    </h1>

                    <p className="text-sm text-gray-500">
                        Arte y tradición
                    </p>
                </div>
            </div>

            {/* User */}
            <div className="bg-[#F8F5F1] rounded-2xl p-4 mb-8 border border-[#EEE3D8]">

                <h2 className="font-bold text-gray-800">
                    {profile?.nombre || "Usuario"}
                </h2>

                <p className="text-sm text-gray-500">
                    {profile?.tipo || "Miembro"}
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 flex-1">

                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `${linkStyle} ${
                            isActive
                                ? activeStyle
                                : inactiveStyle
                        }`
                    }
                >
                    <FaHome />
                    Inicio
                </NavLink>

                <NavLink
                    to="/marketplace"
                    className={({ isActive }) =>
                        `${linkStyle} ${
                            isActive
                                ? activeStyle
                                : inactiveStyle
                        }`
                    }
                >
                    <FaStore />
                    Marketplace
                </NavLink>

                <NavLink
                    to="/community"
                    className={({ isActive }) =>
                        `${linkStyle} ${
                            isActive
                                ? activeStyle
                                : inactiveStyle
                        }`
                    }
                >
                    <FaUsers />
                    Comunidad
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        `${linkStyle} ${
                            isActive
                                ? activeStyle
                                : inactiveStyle
                        }`
                    }
                >
                    <FaShoppingCart />
                    Carrito
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `${linkStyle} ${
                            isActive
                                ? activeStyle
                                : inactiveStyle
                        }`
                    }
                >
                    <FaUser />
                    Perfil
                </NavLink>

            </nav>

            {/* Logout */}
            <button
                onClick={handleLogout}
                className="mt-8 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all font-semibold"
            >
                <FaSignOutAlt />
                Cerrar sesión
            </button>

        </aside>
    );
}