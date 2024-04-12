import { SignUpController } from '@/application/controllers/SignUpController'

import { makeSignUpUseCase } from './makeSignUpUseCase'

export function makeSignUnController() {
  const signUpUseCase = makeSignUpUseCase()

  return new SignUpController(signUpUseCase)
}
