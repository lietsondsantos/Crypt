import { test, expect } from 'vitest'

import { Cesar } from './../'

const cesar = new Cesar()

test('Encrypting the data', () => {
	expect(cesar.encrypt('abc', 1)).toBe('bcd')
	expect(cesar.encrypt('123', 1)).toBe('234')
})

test('Decrypting the data', () => {
	expect(cesar.decrypt('bcd', 1)).toBe('abc')
	expect(cesar.decrypt('234', 1)).toBe('123')
})
