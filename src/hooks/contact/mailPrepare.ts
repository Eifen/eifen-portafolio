import { depureOptions } from "../../common/depureOptions";
import type IMailForm from "../../interfaces/mailForm.interface";
import type ISendMail from "../../interfaces/nodemailer/sendMail.interface";
import sanitizeHTML from 'sanitize-html'

export default function mailPrepare(payload: IMailForm): ISendMail {
    const formattedMessage = payload.message.replace(/\n/g, '<br>');
    const depureHTML = sanitizeHTML(formattedMessage, depureOptions)
    const depureEMAIL = sanitizeHTML(payload.email, depureOptions)
    const depureNAME = sanitizeHTML(payload.name, depureOptions)
    return {
        to: import.meta.env['VITE_MAIL_TO'] as string,
        subject: 'Inicio de contacto de ' + depureNAME,
        replyTo: depureEMAIL,
        html: `<p>${depureHTML}</p>
        <p><b>Enviado por:</b> ${depureEMAIL}</p>`
    }
}