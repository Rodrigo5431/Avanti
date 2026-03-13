import axios from 'axios';

export const BASE_URL = 'https://api.github.com';

// Configuração global da instância do Axios
export const api = axios.create({
  baseURL: BASE_URL,
});


export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Erro na requisição para o usuário ${username}:`, error);
    
    throw error;
  }
}