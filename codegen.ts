import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://${process.env.NEXT_PUBLIC_SERVER_HOSTNAME}:${process.env.NEXT_PUBLIC_SERVER_PORT}/graphql`,
  documents: ["app/**/*.tsx", "gql/queries/*.graphql"],
  generates: {
    "gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "gql/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        reactApolloVersion: 3,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
}

export default config
