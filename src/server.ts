import express from 'express';
import ViteExpress from 'vite-express'
import dotenv from 'dotenv'
import cors from 'cors'
import { routerServer } from './router/server/config';


//Entorno
dotenv.config()
const server = express();


server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(cors({
    origin: `${process.env['VITE_HOST']}:${process.env['VITE_PORT']}`,
    credentials: true
}))

//Rutas
const port = parseInt(process.env['VITE_PORT'] as string)

routerServer(server)

ViteExpress.listen(server, port, () => {
    console.log(`Server is listening on ${process.env['VITE_HOST']}:${port}...`)
})

export default server
