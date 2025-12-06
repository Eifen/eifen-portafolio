export interface IHttpResponse<T> {
    message: string,
    body?: T,
    statusCode?: number,
    error?: string
}
