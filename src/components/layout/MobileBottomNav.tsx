import { NavLink } from "react-router-dom";

import {
    FaStore,
    FaHome,
    FaUser,
    FaUsers,
} from "react-icons/fa";

export default function MobileBottomNav() {

    const navItems = [
        {
            to: "/community",
            icon: <FaUsers size={20} />,
            label: "Muro",
        },
        {
            to: "/marketplace",
            icon: <FaStore size={20} />,
            label: "Tienda",
        },
        {
            to: "/home",
            icon: <FaHome size={20} />,
            label: "Inicio",
        },
        {
            to: "/profile",
            icon: <FaUser size={20} />,
            label: "Perfil",
        },
    ];

    return (
        <div className="
            fixed bottom-5 left-1/2
            -translate-x-1/2
            w-[92%]
            max-w-md
            bg-white/90
            backdrop-blur-xl
            border border-[#E8E2D9]
            shadow-2xl
            rounded-full
            px-3 py-2
            flex items-center justify-between
            z-50
        ">
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `
                        flex flex-col items-center justify-center
                        transition-all duration-300
                        px-4 py-2 rounded-full
                        ${
                            isActive
                            ? "bg-[#B96A4A] text-white scale-105"
                            : "text-gray-500"
                        }
                        `
                    }
                >
                    {item.icon}

                    <span className="text-[11px] font-semibold mt-1">
                        {item.label}
                    </span>
                </NavLink>
            ))}
        </div>
    );
}