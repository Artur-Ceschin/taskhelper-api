import { FastifyInstance } from 'fastify'

import { makeAuthenticationMiddleware } from './factory/makeAuthenticationMiddleware'
import { makeListTasksController } from './factory/makeListTasksController'
import { makeSignInController } from './factory/makeSignInController'
import { makeSignUnController } from './factory/makeSignUnController'
import { routeAdapter } from './server/adapters'
import { middlewareAdapter } from './server/middleware'

export async function publicRoutes(app: FastifyInstance) {
  app.post('/sign-in', routeAdapter(makeSignInController()))

  app.post('/sign-up', routeAdapter(makeSignUnController()))
}

export async function privateRoutes(app: FastifyInstance) {
  app.addHook('onRequest', middlewareAdapter(makeAuthenticationMiddleware()))

  app.get('/tasks', routeAdapter(makeListTasksController()))
}
