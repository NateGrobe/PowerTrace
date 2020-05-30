const axios = require('axios')
// this address needs to be your ip4 + port
const baseUrl = 'http://192.168.0.101:3001/api/login'

const validateLogin = (un, pass) => {
  const userObj = {
    username: un,
    password: pass,
  }
  const req = axios.post(baseUrl, userObj)
  return req.then(res => res.data)
}

export default { validateLogin }
