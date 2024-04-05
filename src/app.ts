import fastify from 'fastify'

import { appRoutes } from './route'

export const app = fastify()

app.register(appRoutes)
