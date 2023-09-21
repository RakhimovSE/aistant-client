import { ReactNode } from "react"
import { Metadata } from "next"
import ApolloProvider from "./apollo-provider"
import Providers from "./providers"

export const metadata: Metadata = {
  title: process.env.title,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ApolloProvider
            host={process.env.SERVER_HOSTNAME as string}
            port={process.env.SERVER_PORT as string}
          >
            {children}
          </ApolloProvider>
        </Providers>
      </body>
    </html>
  )
}
