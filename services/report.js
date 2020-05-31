const axios = require('axios')
// this address needs to be your ip4 + port
const baseUrl = 'http://192.168.0.101:3001/api/reports'

const sendReport = report => {
  const req = axios.post(baseUrl, report)
  return req.then(res => res.data)
}

export default { sendReport }
