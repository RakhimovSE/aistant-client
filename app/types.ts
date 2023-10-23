export type AccessTokenPayload = {
  id: number
  email: string
  firstName: string
  lastName: string
  emailVerifiedAt: number | undefined
  avatar: string | null
}

export type RefreshTokenPayload = {
  userId: number
  jti: string
}
