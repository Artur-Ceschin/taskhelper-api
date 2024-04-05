import { FastifyInstance } from 'fastify'

import { makeSignInController } from './factory/makeSignInController'
import { makeSignUnController } from './factory/makeSignUnController'
import { routeAdapter } from './server/adapters'

export async function appRoutes(app: FastifyInstance) {
  app.post('/sign-up', routeAdapter(makeSignUnController()))

  app.post('/sign-in', routeAdapter(makeSignInController()))
}
