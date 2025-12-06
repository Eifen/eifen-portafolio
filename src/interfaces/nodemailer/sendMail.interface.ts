export default interface ISendMail {
    to: string,
    subject: string,
    replyTo: string,
    html: string
}