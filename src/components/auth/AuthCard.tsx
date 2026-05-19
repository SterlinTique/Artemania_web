import type { ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
    return (
        <div className="bg-white border border-[#fbf3f3] rounded-3xl p-8 shadow-sm">
            {children}
        </div>
    );
}