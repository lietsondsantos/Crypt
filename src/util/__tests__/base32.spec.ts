import { test, expect } from 'vitest'

import { Base32 } from './..'

const base32 = new Base32()

test('Coding the text using the base32', () => {
  expect(base32.encode('crypt')).toBe('MNZHS4DU')
  expect(base32.encode('123')).toBe('GEZDG')
})

test('Decoding the text using the base32', () => {
  expect(base32.decode('MNZHS4DU')).toBe('crypt')
})
