import { encode, decode } from 'js-base64'

class Base64 {
  public encode (str: string): string {
    return encode(str)
  }

  public decode (str: string): string {
    return decode(str)
  }
}

export default Base64
