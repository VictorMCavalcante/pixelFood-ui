import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pixelfood-api.onrender.com/' // para produção
  //baseURL : 'http://localhost:3333/' // para teste
})
