/**
 * Interfaz para manejar los errores
 */
export class IMessageException {
    constructor(public errorCode?: string, public errorMessage?: string, public errorData?: unknown) { }
}