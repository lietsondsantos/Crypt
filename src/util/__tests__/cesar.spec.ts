import { test, expect } from 'vitest'

import { Cesar } from './../'

const cesar = new Cesar()

test('Coding the text using the Cesar cipher', () => {
	expect(cesar.encode('abc', 1)).toBe('bcd')
	expect(cesar.encode('123', 1)).toBe('234')
})

test('Decoding the text using the Caesar cipher', () => {
	expect(cesar.decode('bcd', 1)).toBe('abc')
	expect(cesar.decode('234', 1)).toBe('123')
})
