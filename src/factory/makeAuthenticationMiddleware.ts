import { AuthenticationMiddleware } from '@/application/middleares/AuthenticationMiddleware'

export function makeAuthenticationMiddleware() {
  return new AuthenticationMiddleware()
}
