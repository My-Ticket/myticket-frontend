import axios from "axios"

const baseUrl = 'http://localhost:3001/api/login'

const login = async (credentials: {email: string, password: string, rememberMe: boolean}) => {
  const {data} = await axios.post(baseUrl, JSON.stringify(credentials))
  return data
}

export default { login }