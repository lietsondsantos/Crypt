import { test, expect, describe } from 'vitest'

import { Base64 } from './..'

describe('Base64', () => {
  const base64 = new Base64()

  test('Should return anything', () => {
    expect(base64.encode('crypt')).toBeDefined()
    expect(base64.decode('Y3J5cHQ=')).toBeDefined()
  })

  test('Should encode the text', () => {
    expect(base64.encode('crypt')).toBe('Y3J5cHQ=')
    expect(base64.encode('cryptography')).toBe('Y3J5cHRvZ3JhcGh5')
  })

  test('Should decode the text', () => {
    expect(base64.decode('Y3J5cHQ=')).toBe('crypt')
    expect(base64.decode('Y3J5cHRvZ3JhcGh5')).toBe('cryptography')
  })
})
