import useSWR from "swr"
import User from "@/app/types/user"

type RawUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export default function useUser() {
  const { data, error, isLoading } = useSWR<RawUser>("/api/user", (input) =>
    fetch(input).then((res) => res.json()),
  )

  const user: User | undefined = data && {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    avatar: data.avatar,
  }

  return {
    user,
    isLoading,
    isError: error,
  }
}
