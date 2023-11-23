import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import VkProvider from "next-auth/providers/vk"
import YandexProvider from "next-auth/providers/yandex"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
  ],
})

export { handler as GET, handler as POST }
