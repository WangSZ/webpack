import 'babel-polyfill'
import Vue from 'vue'

describe('Mock', () => {
  it('mock should work', () => {
    return Vue.prototype.$http.get('/users').then((res) => {
      expect(res.data.data.length).to.equal(2){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
