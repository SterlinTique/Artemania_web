interface AuthInputProps {
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    multiline?: boolean;
}

export default function AuthInput({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    multiline = false,
}: AuthInputProps) {
    return (
        <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
                {label}
            </label>

            {multiline ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full border border-[#E8E2D9] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#B96A4A] min-h-[120px] resize-none"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full border border-[#E8E2D9] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#B96A4A]"
                />
            )}
        </div>
    );
}