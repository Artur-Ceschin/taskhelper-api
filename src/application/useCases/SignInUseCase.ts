import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import authConfig from '@/config/auth'

import { InvalidCredentials } from '../errors/InvalidCredentials'
import { prismaClient } from '../libs/prismaClient'

interface IInput {
  email: string
  password: string
}

interface IOutput {
  accessToken: string
}

export class SignInUseCase {
  async execute({ email, password }: IInput): Promise<IOutput> {
    const account = await prismaClient.user.findUnique({
      where: { email },
    })

    if (!account) {
      throw new InvalidCredentials()
    }

    const isPasswordValid = await compare(password, account.password_hash)

    if (!isPasswordValid) {
      throw new InvalidCredentials()
    }

    const { expiresIn, secret } = authConfig.jwt
    const accessToken = sign({ sub: account.id }, secret, {
      expiresIn,
    })

    return {
      accessToken,
    }
  }
}
