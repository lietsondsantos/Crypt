import { encode, decode } from 'js-base64'

class Base64 {
  encrypt (value: string) {
    return encode(value)
  }

  decrypt (value: string) {
    return decode(value)
  }
}

export default Base64
