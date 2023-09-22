import { test, expect } from 'vitest'

import { Base64 } from './../'

const base64 = new Base64()

test('Coding the text using the base64',() => {
  expect(base64.encode('crypt')).toBe('Y3J5cHQ=')
  expect(base64.encode('cryptography')).toBe('Y3J5cHRvZ3JhcGh5')
})

test('Decoding the text using the base64', () => {
  expect(base64.decode('Y3J5cHQ=')).toBe('crypt')
  expect(base64.decode('Y3J5cHRvZ3JhcGh5')).toBe('cryptography')
})
