import type { Express } from "express"
import { IMessageException } from "../interfaces/exceptions.interface.js"
import HttpResponseVerifyServer from "../types/httpResponseServer.js"

export default class ServerRoutes<T> {
    protected errorResponse!: IMessageException
    protected responseType: HttpResponseVerifyServer<T> = new HttpResponseVerifyServer<T>()

    constructor(protected routesService: Express) { }

    /**
    * Maneja los errores en las rutas
    * @param error Captura el error
    * @returns Retorna un objeto IMEssageException o el mismo param si el error no es una instancia de Error
    */
    protected routesError(error: unknown) {
        if (error instanceof Error) {
            this.errorResponse = new IMessageException(undefined, error.message, undefined)
            return this.errorResponse
        }
        return error
    }
}