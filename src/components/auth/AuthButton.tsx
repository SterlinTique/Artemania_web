interface AuthButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit";
    loading?: boolean;
}

export default function AuthButton({
    text,
    onClick,
    type = "button",
    loading = false,
}: AuthButtonProps) {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className="w-full bg-[#B96b4d] hover:opacity-90 transition-all text-white font-bold py-3 rounded-xl mt-3"
        >
            {loading ? "Verificando..." : text}
        </button>
    );
}