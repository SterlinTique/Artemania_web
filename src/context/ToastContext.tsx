import {
    createContext,
} from "react";

type ToastContextType = {
    success: (title: string, message?: string) => void;
    error: (title: string, message?: string) => void;
    warn: (title: string, message?: string) => void;
    info: (title: string, message?: string) => void;
};

export const ToastContext =
    createContext<ToastContextType | undefined>(
        undefined
    );