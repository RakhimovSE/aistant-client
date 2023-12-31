"use client"

import { ReactNode } from "react"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <SessionProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </SessionProvider>
    </CacheProvider>
  )
}
