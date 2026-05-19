import { toast } from "sonner";
import type { ReactNode } from "react";

import { ToastContext } from "./ToastContext";

export function ToastProvider({
    children,
}: {
    children: ReactNode;
}) {

    const success = (title: string, message?: string) => {
        toast.success(title, {
            description: message,
        });
    };

    const error = (title: string, message?: string) => {
        toast.error(title, {
            description: message,
        });
    };

    const warn = (title: string, message?: string) => {
        toast.warning(title, {
            description: message,
        });
    };

    const info = (title: string, message?: string) => {
        toast.info(title, {
            description: message,
        });
    };

    return (
        <ToastContext.Provider
            value={{
                success,
                error,
                warn,
                info,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}