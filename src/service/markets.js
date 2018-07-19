import request from '../untils/request'
import config from '../api/config'

const { API } = config
const { marketsUrl } = API

async function marketsList (data) {
  return request({
    url: marketsUrl,
    method: 'GET',
    data
  })
}

export {
  marketsList
}
