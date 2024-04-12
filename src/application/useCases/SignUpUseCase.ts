import { hash } from 'bcryptjs'

import { AccountAlreadyExists } from '../errors/AccountAlreadyExists'
import { prismaClient } from '../libs/prismaClient'

interface IInput {
  name: string
  email: string
  password: string
}

export class SignUpUseCase {
  constructor(private readonly salt: number) {}

  async execute({ email, name, password }: IInput) {
    const accountAlreadyExists = await prismaClient.user.findUnique({
      where: { email },
    })

    if (accountAlreadyExists) {
      throw new AccountAlreadyExists()
    }

    const password_hash = await hash(password, this.salt)

    await prismaClient.user.create({
      data: {
        name,
        password_hash,
        email,
        cellphone: '1999',
      },
    })
  }
}
