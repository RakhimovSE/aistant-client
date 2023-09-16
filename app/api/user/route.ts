import { NextResponse } from 'next/server'

import User from '@/app/types/user'
 
export async function GET() {
  const res = await fetch('https://reqres.in/api/users/2', {
    next: { revalidate: 60 },
  })
  const { data: user }: { data: User } = await res.json()
 
  return NextResponse.json(user)
}