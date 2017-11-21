import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let data = {
  users: [
    'Tom',
    'Jerry'
  ]
}

let mock = new MockAdapter(axios, { delayResponse: 80 })

mock.onGet('/users').reply(200, {
  data: data.users.slice(0, 10)
})

console.log('mock loaded...')
