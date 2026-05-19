interface TermsCheckboxProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    onOpenTerms: () => void;
}

export default function TermsCheckbox({
    checked,
    onChange,
    onOpenTerms,
}: TermsCheckboxProps) {
    return (
        <div className="mt-4">
            <label className="flex items-start gap-3 text-sm text-gray-600">

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="mt-1"
                />

                <span>
                    He leído y acepto los{" "}

                    <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-[#B96A4A] font-semibold hover:underline"
                    >
                        Términos y Condiciones
                    </button>

                </span>
            </label>
        </div>
    );
}