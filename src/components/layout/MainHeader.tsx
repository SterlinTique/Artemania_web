import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    FaBell,
    FaComments,
    FaSearch,
    FaSignOutAlt,
    FaPalette,
} from "react-icons/fa";

import { useAuth } from "../../hooks/useAuth";

import { logoutUser } from "../../services/auth";

import { useToast } from "../../hooks/useToast";

export default function MainHeader() {

    const location = useLocation();
    const navigate = useNavigate();

    const { profile } = useAuth();

    const toast = useToast();

    const getTitle = () => {

        switch (location.pathname) {

            case "/home":
                return "Inicio";

            case "/marketplace":
                return "Marketplace";

            case "/community":
                return "Comunidad";

            case "/profile":
                return "Mi Perfil";

            default:
                return "Artemanía";
        }
    };

    const handleLogout = async () => {

        const result = await logoutUser();

        if (result.success) {

            toast.success(
                "Sesión cerrada",
                "Hasta pronto artista 🎨"
            );

            navigate("/");

        } else {

            toast.error(
                "Error",
                result.error || "No se pudo cerrar sesión."
            );
        }
    };

    return (
        <header className="
            sticky top-0 z-40
            bg-white/90
            backdrop-blur-xl
            border-b border-[#E8E2D9]
            px-5 py-4
            flex items-center justify-between
        ">

            {/* Left */}
            <div className="flex items-center gap-3">

                <div className="
                    w-11 h-11 rounded-2xl
                    bg-[#F4E6DE]
                    flex items-center justify-center
                ">
                    <FaPalette
                        className="text-[#B96A4A]"
                        size={22}
                    />
                </div>

                <div>
                    <h1 className="
                        text-xl font-black
                        text-[#B96A4A]
                        leading-none
                    ">
                        Artemanía
                    </h1>

                    <p className="
                        text-xs text-gray-500
                        font-medium
                    ">
                        {getTitle()}
                    </p>
                </div>
            </div>

            {/* Search */}
            <div className="
                hidden md:flex
                items-center
                bg-[#F8F5F1]
                border border-[#E8E2D9]
                rounded-2xl
                px-4 py-2
                w-full max-w-md mx-8
            ">
                <FaSearch className="text-gray-400 mr-3" />

                <input
                    type="text"
                    placeholder="Buscar artesanías..."
                    className="
                        bg-transparent
                        outline-none
                        w-full
                        text-sm
                    "
                />
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

                {/* Notifications */}
                <button className="
                    relative
                    w-11 h-11
                    rounded-2xl
                    bg-[#F8F5F1]
                    hover:bg-[#F4E6DE]
                    transition
                    flex items-center justify-center
                ">
                    <FaBell
                        className="text-[#B96A4A]"
                        size={18}
                    />

                    <span className="
                        absolute -top-1 -right-1
                        w-5 h-5 rounded-full
                        bg-red-500 text-white
                        text-[10px] font-bold
                        flex items-center justify-center
                    ">
                        2
                    </span>
                </button>

                {/* Chats */}
                <button className="
                    relative
                    w-11 h-11
                    rounded-2xl
                    bg-[#F8F5F1]
                    hover:bg-[#F4E6DE]
                    transition
                    flex items-center justify-center
                ">
                    <FaComments
                        className="text-[#B96A4A]"
                        size={18}
                    />

                    <span className="
                        absolute -top-1 -right-1
                        w-5 h-5 rounded-full
                        bg-red-500 text-white
                        text-[10px] font-bold
                        flex items-center justify-center
                    ">
                        1
                    </span>
                </button>

                {/* Profile */}
                <Link
                    to="/profile"
                    className="
                        hidden sm:flex
                        items-center gap-3
                        bg-[#F8F5F1]
                        border border-[#E8E2D9]
                        rounded-2xl
                        px-3 py-2
                    "
                >
                    <div className="
                        w-10 h-10 rounded-xl
                        bg-[#B96A4A]
                        text-white
                        flex items-center justify-center
                        font-bold
                    ">
                        {profile?.nombre?.charAt(0) || "A"}
                    </div>

                    <div className="hidden lg:block">
                        <p className="
                            text-sm font-bold
                            text-gray-700
                        ">
                            {profile?.nombre || "Usuario"}
                        </p>

                        <p className="
                            text-xs text-gray-500
                        ">
                            {profile?.tipo || "Artista"}
                        </p>
                    </div>
                </Link>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="
                        w-11 h-11
                        rounded-2xl
                        bg-red-50
                        hover:bg-red-100
                        transition
                        flex items-center justify-center
                    "
                >
                    <FaSignOutAlt
                        className="text-red-500"
                        size={18}
                    />
                </button>

            </div>
        </header>
    );
}