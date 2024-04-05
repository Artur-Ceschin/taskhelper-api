import { FastifyReply, FastifyRequest } from 'fastify'

import { IController } from '@/application/interfaces/IController'

export function routeAdapter(controller: IController) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { statusCode, body } = await controller.handle({
      body: request.body as Record<string, unknown>,
      params: request.params as Record<string, string>,
    })

    reply.status(statusCode).send(body)
  }
}
