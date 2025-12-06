import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv'
import type ISendMail from '../interfaces/nodemailer/sendMail.interface';

//Config env
dotenv.config();

/**
 * Clase que configura el correo y sus funcionalidades
 */
export default class NodemailerController {
    /** Propiedad de configuracion general */
    private static transporter = nodemailer.createTransport({
        service: process.env['MAIL_SERVICE'],
        // host: process.env['MAIL_HOST'],
        // port: Number(process.env['MAIL_PORT']),
        // secure: false,
        auth: {
            user: process.env['MAIL_USERNAME'],
            pass: process.env['MAIL_PASSWORD']
        },
        // tls: {
        //     servername: process.env['MAIL_HOST']
        // },
        // requireTLS: process.env['MAIL_ENCRYPTION'] === 'tls'
    })

    /**
     * Envia un correo 
     * @param payload Objeto con interfaz ISendMail para configuracion del correo
     * @returns Devuelve un true si no hay problemas con el envio
     */
    static sendMail(payload: ISendMail): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                await this.transporter.sendMail({
                    from: `"PERSONAL" <${process.env['MAIL_USERNAME']}>`,
                    ...payload
                });
                resolve(true)
            } catch (error) {

                reject(error)
            }
        })
    }
}