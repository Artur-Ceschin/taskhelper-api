import { FastifyInstance } from 'fastify'

import { makeAuthenticationMiddleware } from './factory/makeAuthenticationMiddleware'
import { makeListTasksController } from './factory/makeListTasksController'
import { makeSignInController } from './factory/makeSignInController'
import { makeSignUnController } from './factory/makeSignUnController'
import { routeAdapter } from './server/adapters'
import { middlewareAdapter } from './server/middleware'

export async function appRoutes(app: FastifyInstance) {
  app.post('/sign-up', routeAdapter(makeSignUnController()))

  app.post('/sign-in', routeAdapter(makeSignInController()))

  app.get(
    '/tasks',
    { onRequest: [middlewareAdapter(makeAuthenticationMiddleware())] },
    routeAdapter(makeListTasksController()),
  )
}
