import { GraphQLError } from "graphql"
import request, { gql } from "graphql-request"
import useSWR from "swr"
import User from "@/app/types/user"

interface UseUserProps {
  id: number
}

export default function useUser({ id }: UseUserProps) {
  const userQuery = gql`
    query getUser($userId: ID!) {
      user(id: $userId) {
        id
        email
        firstName
        lastName
        avatar
      }
    }
  `

  const { data, error, isLoading } = useSWR<
    { user: User },
    GraphQLError,
    [string, number]
  >([userQuery, id], () =>
    request("http://localhost:8000/graphql", userQuery, { userId: id }),
  )

  return {
    user: data?.user,
    isLoading,
    isError: error,
  }
}
