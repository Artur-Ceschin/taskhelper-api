import { env } from '@/env'

export default {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: '1d',
  },
}
