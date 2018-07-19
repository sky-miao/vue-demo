const Mock = require('mockjs')
const config = require('./config')
const { API } = config
const { marketsUrl } = API
const faker = require('faker')
const _ = require('lodash')

Mock.mock(marketsUrl, {
  'code': 200,
  'msg': '',
  'data': _.range(0, 5).map(index => {
    return {
      id: index,
      coin: faker.name.firstName(),
      'lastPrice|1-100.1-3': 1,
      'change|-20-100.1-3': 1
    }
  })
})
