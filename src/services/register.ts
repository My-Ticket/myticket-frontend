import axios from "axios"

const baseUrl = 'http://localhost:3001/api/register'

export const register = async (credentials: {email: string, password: string}) => {
  const {data} = await axios.post(baseUrl, JSON.stringify(credentials))
  return data
}

export default { register }