"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

interface ApolloProviderProps extends React.PropsWithChildren {
  host: string
  port: string
}

function makeClient(host: string, port: string) {
  const httpLink = new HttpLink({
    uri: `http://${host}:${port}/graphql`,
    fetchOptions: { cache: "no-store" },
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

export default function ApolloProvider({
  host,
  port,
  children,
}: ApolloProviderProps) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient(host, port)}>
      {children}
    </ApolloNextAppProvider>
  )
}
