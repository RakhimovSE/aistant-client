import useSWR from 'swr'

import User from '@/app/types/user'
import fetcher from './fetcher'

export default function useUser() {
  const { data, error, isLoading } = useSWR<User>(`/api/user`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}
