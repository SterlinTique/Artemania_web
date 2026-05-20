import CryptoJS from "crypto-js";

/**
 * Convierte la palabra secreta en un hash SHA-256
 * para no guardar la palabra real en la base de datos.
 */

export const hashSecretWord = (word: string): string => {
    if (!word) return "";

    const normalized = word
        .trim()
        .toLowerCase();

    return CryptoJS.SHA256(normalized).toString(
        CryptoJS.enc.Hex
    );
};

/**
 * Verifica si la palabra ingresada coincide
 * con el hash guardado.
 */

export const verifySecretWord = (
    wordEntered: string,
    hashedWordStored: string
): boolean => {

    const hashEntered = hashSecretWord(wordEntered);

    return hashEntered === hashedWordStored;
};