import type { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-[#fbf3f3] flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Panel izquierdo */}
            <section className="hidden md:flex flex-col justify-center bg-[#B96b4d] text-white p-12">
            <h1 className="text-5xl font-black mb-6">
                Artemanía
            </h1>

            <p className="text-lg leading-8 text-white/90">
                Conéctate con el arte auténtico.
            </p>
            </section>

            {/* Panel derecho */}
            <section className="p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
                {children}
            </div>
            </section>
        </div>
        </main>
    );
}