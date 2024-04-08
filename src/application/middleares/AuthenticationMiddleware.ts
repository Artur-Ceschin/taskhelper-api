import { verify } from 'jsonwebtoken'

import authConfig from '@/config/auth'

import {
  IData,
  IMiddleware,
  IRequest,
  IResponse,
} from '../interfaces/IMiddleware'

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid access token.',
        },
      }
    }

    try {
      const [bearer, token] = authorization.split(' ')

      if (bearer !== 'Bearer') {
        throw new Error()
      }

      const payload = verify(token, authConfig.jwt.secret)

      return {
        data: {
          accountId: payload.sub,
        },
      }
    } catch {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid access token.',
        },
      }
    }
  }
}
