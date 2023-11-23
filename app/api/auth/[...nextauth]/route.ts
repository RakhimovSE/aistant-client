import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"
import YandexProviders from "next-auth/providers/yandex"

const handler = NextAuth({
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    YandexProviders({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
  ],
})

export { handler as GET, handler as POST }
