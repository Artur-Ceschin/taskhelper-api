import cors from '@fastify/cors'
import fastify from 'fastify'

import { privateRoutes, publicRoutes } from './route'

export const app = fastify()

app.register(publicRoutes)
app.register(privateRoutes)

app.register(cors, {})
