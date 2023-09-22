import { test, expect } from 'vitest'

import { Base64 } from './../'

const base64 = new Base64()

test('Encriptando os dados usando base64',() => {
  expect(base64.encrypt('crypt')).toBe('Y3J5cHQ=')
  expect(base64.encrypt('cryptography')).toBe('Y3J5cHRvZ3JhcGh5')
})

test('Desencriptando os dados em base64', () => {
  expect(base64.decrypt('Y3J5cHQ=')).toBe('crypt')
  expect(base64.decrypt('Y3J5cHRvZ3JhcGh5')).toBe('cryptography')
})
