import type { Login } from '@/models/login'
import api from '@/libs/ky'

export const fetchLogin = async (
  name: string,
  password: string
): Promise<Login> => {
  const params = new URLSearchParams()
  params.append('name', name)
  params.append('password', password)

  const response = await api
    .post<Login>('login', { searchParams: params })
    .json()
  return response
}
