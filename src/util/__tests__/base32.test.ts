import { test, expect, describe } from 'vitest'

import { Base32 } from './..'

describe('Base32', () => {
  const base32 = new Base32()

  test('Should return anything', () => {
    expect(base32.encode('crypt')).toBeDefined()
    expect(base32.decode('MNZHS4DU')).toBeDefined()
  })

  test('Should encode the text', () => {
    expect(base32.encode('crypt')).toBe('MNZHS4DU')
    expect(base32.encode('123')).toBe('GEZDG')
  })

  test('Should decode the text', () => {
    expect(base32.decode('MNZHS4DU')).toBe('crypt')
  })
})
