import ky from 'ky'

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default api
