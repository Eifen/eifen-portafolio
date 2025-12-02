import type IServerRoutes from "../../interfaces/router.interface";

/**
 * Clase estatica de mapeo de rutas
 */
export class MapRoutes {
    protected static router: Map<string, IServerRoutes> = new Map();


    /**
     * Mapea todas las rutas implementadas
     */
    static initRouter() {
        for (const value of this.router) {

            value[1].routes();
        }
    }

    /**
     * Agrega una ruta al mapeado
     * @param key Nombre que tendra la nueva posicion del map
     * @param value Valor que tendra, debe ser una clase que implemente la interfaz IServerRoutes
     */
    static addRoute(key: string, value: IServerRoutes) {
        this.router.set(key, value)
    }
}