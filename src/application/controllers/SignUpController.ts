import { z, ZodError } from 'zod'

import { AccountAlreadyExists } from '../errors/AccountAlreadyExists'
import { IController, IRequest, IResponse } from '../interfaces/IController'
import { SignUpUseCase } from '../useCases/SignUpUseCase'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email({ message: 'Invalid password' }),
  password: z.string().min(6, { message: 'Invalid password' }),
})

export class SignUpController implements IController {
  //Dependency Inversion
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body)

      await this.signUpUseCase.execute({ name, email, password })

      return {
        statusCode: 204,
        body: null,
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        }
      }

      if (error instanceof AccountAlreadyExists) {
        return {
          //409 => Conflict
          statusCode: 409,
          body: {
            message: 'This email is already in use',
          },
        }
      }

      throw error
    }
  }
}
