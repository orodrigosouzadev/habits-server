import * as dotenv from 'dotenv'
dotenv.config()

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: Number(process.env.PORT) || 3333,
}).then(() => {
  console.log('HTTP server running!')
})