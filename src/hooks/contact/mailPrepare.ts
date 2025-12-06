import { depureOptions } from "../../common/depureOptions";
import type IMailForm from "../../interfaces/mailForm.interface";
import sanitizeHTML from 'sanitize-html'

export default function mailPrepare(payload: IMailForm): string {
    const depureEMAIL = sanitizeHTML(payload.email, depureOptions)
    const depureNAME = sanitizeHTML(payload.name, depureOptions)
    return `%2ABuenas%20CARLOS%20NAVAS%2A%0A%5FQuisiera%20adquirir%20uno%20de%20sus%20servicios,%20me%20gustaria%20hablarle%20de%20mi%20propuesta.%5F%0AQuedo%20atento,%20${depureNAME.toUpperCase()}.%0A%3E%20Enviado%20por%3A%20${depureEMAIL}.`
}