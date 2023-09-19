import Cesar from './../cesar'

const cesar = new Cesar()

test('Encrypting the data', () => {
	expect(cesar.encrypt('a', 1)).toBe('b')
	expect(cesar.encrypt('abc', 1)).toBe('bcd')
})

test('Decrypting the data', () => {
	expect(cesar.decrypt('b', 1)).toBe('a')
	expect(cesar.decrypt('bcd', 1)).toBe('abc')
})
