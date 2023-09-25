import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: ["app/**/*.tsx"],
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
}

export default config
