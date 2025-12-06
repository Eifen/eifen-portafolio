/**
 * Validacion de Email
 * @param payload Email a Validar
 * @returns Si coincide, retorna true, caso contrario, false
 */
export default function emailValidate(payload: string): boolean {
    const regFormat = new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$");
    if (payload.length === 0) return false;
    if (!regFormat.test(payload)) return false;
    return true
}