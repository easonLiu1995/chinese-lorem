import expect from 'chai'

import lorem from '../src/index'

describe('text generate test', () => {
  it('length should less than 15', () => {
    const result = lorem({
      max: 15
    })
    expect.assert(result.length <= 15)
  })
  it('length should greater than 5, and less than 20', () => {
    const result = lorem({
      max: 20,
      min: 5
    })
    expect.assert(result.length >= 5 && result.length <= 20)
  })
  it('should have punctuations', () => {
    const result = lorem({
      max: 20,
      usePunctuation: true
    })
    expect.assert(/，|。/g.test(result))
  })
})
