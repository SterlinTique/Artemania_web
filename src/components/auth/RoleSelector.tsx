import { FaUser, FaPalette } from "react-icons/fa";

interface RoleSelectorProps {
    label: string;
    selectedRole: string;
    onSelectRole: (role: string) => void;
}

export default function RoleSelector({
    label,
    selectedRole,
    onSelectRole,
}: RoleSelectorProps) {
    return (
        <div className=" mb-5">
            {/* Label */}
            <label className="block w-full mb-2 text-sm font-semibold text-gray-700">
                {label}
            </label>
            
            <div className="grid grid-cols-2 gap-4 mb-5">
                <button
                onClick={() => onSelectRole("cliente")}
                className={`border rounded-xl py-3 flex flex-col items-center justify-center font-semibold transition-all ${
                selectedRole === "cliente"
                    ? "bg-[#B96b4d] text-white border-[#B96b4d]"
                    : "border-[#E8E2D9]"
                }`}
                >
                    <FaUser size={22} />
                    Cliente
                </button>

                <button
                onClick={() => onSelectRole("artesano")}
                className={`border rounded-xl py-3 flex flex-col items-center justify-center font-semibold transition-all ${
                selectedRole === "artesano"
                    ? "bg-[#B96b4d] text-white border-[#B96b4d]"
                    : "border-[#E8E2D9]"
                }`}
                >
                    <FaPalette size={22} />
                    Artesano
                </button>
            </div>
        </div>
    );
}