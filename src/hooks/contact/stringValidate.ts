/**
 * Validamos un string
 * @param payload String a validar
 * @param length Longitud limite permitida
 * @returns si coincide retorna true, caso contrario false
 */
export default function stringValidate(payload: string, length: number): boolean {
    if (payload.length > length) return false;
    if (payload.length === 0) return false;
    return true;
}