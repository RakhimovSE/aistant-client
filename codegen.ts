import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
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
