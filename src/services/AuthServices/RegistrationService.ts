import axios from 'axios'

const BACKEND_URL = 'http://localhost:8000/v1'
const PROD_URL = ''

export const authService = {
  register: async(firstName: string, lastName: string, email: string, address: string, phone: string, password: string) => {
    const response = await axios.post(`${BACKEND_URL}/auth/register`, {firstName, lastName, email, address, phone, password});
    return response.data;
  }
}