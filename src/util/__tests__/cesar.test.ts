import { test, expect, describe } from 'vitest'

import { Cesar } from './..'

describe('Cesar', () => {
  const cesar = new Cesar()

  test('Should return anything', () => {
    expect(cesar.encode('123', 1)).toBeDefined()
    expect(cesar.decode('234', 1)).toBeDefined()
  })

  test('Should encode the text', () => {
    expect(cesar.encode('abc', 1)).toBe('bcd')
	  expect(cesar.encode('123', 1)).toBe('234')
  })

  test('Should decode the text', () => {
    expect(cesar.decode('bcd', 1)).toBe('abc')
	  expect(cesar.decode('234', 1)).toBe('123')
  })
})
