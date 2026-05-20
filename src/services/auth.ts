import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    doc,
    setDoc,
    getDoc,
} from "firebase/firestore";

import {
    auth,
    db,
} from "./firebase";

interface RegisterData {
    nombre: string;
    email: string;
    password: string;
    tipo: "Cliente" | "Artesano";
    palabraClave: string;
    descripcion?: string;
}

/**
 * REGISTRO
 */

export async function registerUser(
    data: RegisterData
) {

    try {

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = userCredential.user;

        const profileData = {
            nombre: data.nombre,
            email: data.email,
            tipo: data.tipo,
            palabraClave: data.palabraClave,
            descripcion: data.descripcion || "",
            estado: "activo",
            createdAt: new Date(),
        };

        await setDoc(
            doc(db, "usuarios", user.uid),
            profileData
        );

        return {
            success: true,
            user,
            error: null,
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
 * LOGIN
 */

export async function loginUser(
    email: string,
    password: string
) {

    try {

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        const userRef = doc(
            db,
            "usuarios",
            user.uid
        );

        const userSnap =
        await getDoc(userRef);

        if (!userSnap.exists()) {

        return {
            success: false,
            user: null,
            profile: null,
            error: "Perfil no encontrado",
        };

        }

        return {
            success: true,
            user,
            profile: userSnap.data(),
            error: null,
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
 * RECUPERAR CONTRASEÑA
 */

export async function sendResetEmail(
    email: string
) {

    try {

        await sendPasswordResetEmail(
            auth,
            email
        );

        return {
            success: true,
            error: null,
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
 * LOGOUT
 */

export async function logoutUser() {

    try {

        await signOut(auth);

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