const URL = 'http://localhost:3003/api/v1'
module.exports = {
  name: 'vue-cli',
  CORS: ['http://localhost:3003'],
  YQL: [''],
  API: {
    loginUrl: `${URL}/login`,
    marketsUrl: `${URL}/markets`
  }
}
