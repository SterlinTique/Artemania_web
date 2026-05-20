import { createContext } from "react";

import type { User } from "firebase/auth";

export interface UserProfile {
    id?: string;
    nombre?: string;
    email?: string;
    tipo?: string;
    foto?: string;
}

export interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
}

export const AuthContext = createContext<
    AuthContextType | undefined
>(undefined);