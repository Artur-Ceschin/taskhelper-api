import { FastifyReply, FastifyRequest } from 'fastify'

import { IMiddleware } from '@/application/interfaces/IMiddleware'

export function middlewareAdapter(middleware: IMiddleware) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const result = await middleware.handle({
      headers: request.headers as Record<string, string>,
    })

    if ('statusCode' in result) {
      return reply.status(result.statusCode).send(result.body)
    }

    request.metadata = {
      ...request.metadata,
      ...result.data,
    }
  }
}
