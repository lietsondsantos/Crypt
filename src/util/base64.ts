import { encode, decode } from 'js-base64'

class Base64 {
  encode (value: string) {
    return encode(value)
  }

  decode (value: string) {
    return decode(value)
  }
}

export default Base64
