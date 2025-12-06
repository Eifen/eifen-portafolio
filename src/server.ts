import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import ViteExpress from 'vite-express'
import { routerServer } from './router/server/config';


//Entorno
dotenv.config()
const server = express();


server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(cors({
    origin: process.env['HOST'],
    credentials: true
}))

//Rutas
const port = parseInt(process.env['PORT'] as string) || 3000

routerServer(server)

ViteExpress.listen(server, port, () => {
    console.log(`Server is listening on ${process.env['HOST']}:${port}...`)
})

export default server
