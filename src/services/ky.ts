import ky from "ky";

const api = ky.create({
    prefixUrl: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json',
    }
})
export default api