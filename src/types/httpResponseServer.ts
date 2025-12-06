import VerifyTypes from "../controllers/verifyTypes.controller.js";
import type { IHttpResponse } from "../interfaces/http.interface.js";

export default class HttpResponseVerifyServer<T> extends VerifyTypes<IHttpResponse<T>> {
    constructor() {
        super({
            message: '',
            body: undefined,
            statusCode: 0,
            error: ''
        })
    }
}