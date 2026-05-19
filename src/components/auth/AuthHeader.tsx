interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

export default function AuthHeader({
    title,
    subtitle,
}: AuthHeaderProps) {
    return (
        <div className="mb-8 text-center">
            <h1 className="text-4xl font-black text-[#B96b4d] mb-3">
                {title}
            </h1>

            <p className="text-gray-500 leading-6">
                {subtitle}
            </p>
        </div>
    );
}