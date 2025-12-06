import { HttpStatusCode } from "axios";
import type ISendMail from "../../../interfaces/nodemailer/sendMail.interface.js";
import ServerRoutes from "../../../controllers/routes.controller.js";
import type IServerRoutes from "../../../interfaces/router.interface.js";
import SendMailVerifyServer from "../../../types/sendMailServer.js";
import NodemailerController from "../../../controllers/nodemailer.controller.js";

export class SendMailRoute extends ServerRoutes<ISendMail> implements IServerRoutes {
    private verifyMailService = new SendMailVerifyServer();

    routes(): void {
        //Enviamos el correo
        this.routesService.post('/send-mail', async (req, res) => {
            try {
                const mailParams: ISendMail = req.body
                //Verificamos que pertenezca a la clase ISendMail
                this.verifyMailService.verify(mailParams)
                //Si pertenece, enviamos el correo
                await NodemailerController.sendMail(mailParams)
                res.send('Correo de contacto enviado')
            } catch (error) {
                console.error(error)
                return res.status(HttpStatusCode.BadRequest).json(error)
            }
        })
    }
}