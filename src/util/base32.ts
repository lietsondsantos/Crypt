class Base32 {
  private readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

  public encode(input: string): string {
    let output = ''
    let buffer = 0
    let bitsLeft = 0

    for (const character of input) {
      const charCode = character.charCodeAt(0)
      buffer <<= 8
      buffer |= charCode
      bitsLeft += 8

      while (bitsLeft >= 5) {
        const index = (buffer >>> (bitsLeft - 5)) & 0x1f
        output += this.alphabet[index]
        bitsLeft -= 5
      }
    }

    if (bitsLeft > 0) {
      const index = (buffer << (5 - bitsLeft)) & 0x1f
      output += this.alphabet[index]
    }

    return output
  }

  public decode(input: string): string {
    let output = ''
    let buffer = 0
    let bitsLeft = 0

    for (const character of input) {
      const index = this.alphabet.indexOf(character)

      if (index === -1) {
        throw new Error('Invalid character: ' + character)
      }

      buffer <<= 5
      buffer |= index
      bitsLeft += 5

      while (bitsLeft >= 8) {
        const charCode = (buffer >>> (bitsLeft - 8)) & 0xff
        output += String.fromCharCode(charCode)
        bitsLeft -= 8
      }
    }

    if (bitsLeft > 0) {
      const charCode = (buffer << (8 - bitsLeft)) & 0xff
      output += String.fromCharCode(charCode)
    }

    return output
  }
}

export default Base32
