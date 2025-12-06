import VerifyTypes from "../controllers/verifyTypes.controller.js";
import type ISendMail from "../interfaces/nodemailer/sendMail.interface.js";

export default class SendMailVerifyServer extends VerifyTypes<ISendMail> {
    constructor() {
        super({
            to: '',
            subject: '',
            replyTo: '',
            html: ''
        })
    }
}