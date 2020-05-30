const axios = require('axios')
// this address needs to be your ip4 + port
const baseUrl = 'http://192.168.0.101:3001/api/users'

const getUser = id => {
  const req = axios.get(`${baseUrl}/${id}`)
  return req.then(res => res.data)
}

export default { getUser }
