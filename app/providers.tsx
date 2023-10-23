"use client"

import { ReactNode } from "react"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import ApolloProvider from "./apollo-provider"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ApolloProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ApolloProvider>
    </CacheProvider>
  )
}
