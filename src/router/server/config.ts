import type { Express } from "express"
import { MapRoutes } from "./routes.js"

//Routes import


export const routerServer = (service: Express) => {
    // MapRoutes.addRoute('login', new LoginRoute(service));

    //Ejecutamos todas las rutas
    MapRoutes.initRouter()
}