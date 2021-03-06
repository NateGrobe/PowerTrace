const axios = require('axios')
// this address needs to be your ip4 + port
const baseUrl = 'http://192.168.0.101:3001/api/users'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const getUser = id => {
  const req = axios.get(`${baseUrl}/${id}`)
  return req.then(res => res.data)
}

const createUser = obj => {
  const req = axios.post(baseUrl, obj)
  return req.then(res => res.data)
}

const getFriend = username => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data.filter(r => r.username === username))
}

const addConnection = (fid, uid) => {
  const obj = { 'connections': fid }
  const req = axios.put(`${baseUrl}/${uid}`, obj)
  return req.then(res => res.data)
}

export default { getAll, getUser, createUser, getFriend, addConnection }
