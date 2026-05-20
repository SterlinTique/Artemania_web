import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

/**
 * Tipado del perfil de usuario
 */

export interface UserProfile {
    id?: string;

    nombre: string;
    email: string;

    tipo: "Cliente" | "Artesano";

    palabraClave?: string;

    descripcion?: string;

    estado?: string;

    createdAt?: Date;
}

/**
 * Crear perfil
 */

export async function createUserProfile(
    uid: string,
    data: UserProfile
) {

    try {

        await setDoc(
            doc(db, "usuarios", uid),
            {
                ...data,
                estado: "activo",
            }
        );

        return {
            success: true,
        };

    } catch (error: unknown) {

        return {
            success: false,
            error:
                error instanceof Error
                    ? error.message
                    : "Error desconocido",
        };

    }
}

/**
 * Obtener perfil por UID
 */

export async function getUserProfile(
    uid: string
) {

    try {

        const userRef = doc(
            db,
            "usuarios",
            uid
        );

        const userSnap =
        await getDoc(userRef);

        if (!userSnap.exists()) {

            return {
                data: null,
                error: "Usuario no encontrado",
            };

        }

        return {
            data: {
                id: userSnap.id,
                ...userSnap.data(),
            } as UserProfile,

            error: null,
        };

    } catch (error: unknown) {

        return {
            data: null,
            error:
                error instanceof Error
                    ? error.message
                    : "Error desconocido",
        };

    }
}

/**
 * Obtener perfil por email
 */

export async function getUserProfileByEmail(
    email: string
) {

    try {

        const q = query(
            collection(db, "usuarios"),
            where("email", "==", email)
        );

        const querySnapshot =
        await getDocs(q);

        if (!querySnapshot.empty) {

            const docSnap =
            querySnapshot.docs[0];

            return {
                data: {
                    id: docSnap.id,
                    ...docSnap.data(),
                } as UserProfile,

                error: null,
            };

        }

        return {
            data: null,
            error: "Correo no registrado",
        };

    } catch (error: unknown) {

        return {
            data: null,
            error:
                error instanceof Error
                    ? error.message
                    : "Error desconocido",
        };

    }
}