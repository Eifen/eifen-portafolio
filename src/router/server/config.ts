import type { Express } from "express"
import { MapRoutes } from "./routes.js"
import { SendMailRoute } from "./mail/sendMail.route.js";

//Routes import


export const routerServer = (service: Express) => {
    MapRoutes.addRoute('mail', new SendMailRoute(service));

    //Ejecutamos todas las rutas
    MapRoutes.initRouter()
}