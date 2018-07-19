
import config from '../api/config'
const Mock = require('mockjs')
const faker = require('faker')
const _ = require('lodash')
const { API } = config
const { marketsUrl } = API

Mock.mock(marketsUrl, {
  'code': 200,
  'msg': '',
  'data': _.range(0, 5).map(index => {
    return {
      id: index,
      coin: faker.name.title(),
      lastPrice: faker.name.title(),
      change: ''
    }
  })
})
