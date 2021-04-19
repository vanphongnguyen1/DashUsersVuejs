import axios from 'axios'

 const customAxiosApi = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const GET_API = url => {
  return customAxiosApi.get(url)
}

export const POST_API = (url, data) => {
  return customAxiosApi.post(url, data)
}

export const PUT_API = url => {
  return customAxiosApi.put(url)
}
