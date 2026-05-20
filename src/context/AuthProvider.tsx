import {
    useEffect,
    useState,
} from "react";

import type { ReactNode } from "react";

import {
    onAuthStateChanged,
} from "firebase/auth";

import type { User } from "firebase/auth";

import {
    doc,
    getDoc,
} from "firebase/firestore";

import {
    auth,
    db,
} from "../services/firebase";

import {
    AuthContext,
} from "./AuthContext";

import type {
    UserProfile,
} from "./AuthContext";

interface Props {
    children: ReactNode;
}

export function AuthProvider({
    children,
}: Props) {

    const [user, setUser] =
        useState<User | null>(null);

    const [profile, setProfile] =
        useState<UserProfile | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const unsubscribe =
        onAuthStateChanged(
            auth,
            async (currentUser) => {

            setUser(currentUser);

            if (currentUser) {

                try {

                const userRef = doc(
                    db,
                    "usuarios",
                    currentUser.uid
                );

                const userSnap =
                    await getDoc(userRef);

                if (userSnap.exists()) {

                    setProfile({
                    id: userSnap.id,
                    ...userSnap.data(),
                    });

                }

                } catch (error) {

                console.error(
                    "Error obteniendo perfil:",
                    error
                );

                }

            } else {

                setProfile(null);

            }

            setLoading(false);

            }
        );

    return () => unsubscribe();

    }, []);

    return (
        <AuthContext.Provider
        value={{
            user,
            profile,
            loading,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
}