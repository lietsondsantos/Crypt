class Cesar {
  public encode (str: string, root: number): string {
    const encoded = str.split('').map(item => {
      const convertToNumber = item.charCodeAt(0)
      const convertToString = String
        .fromCharCode(convertToNumber + Number(root))

      return convertToString
    })

    return encoded.join('')
  }

  public decode (str: string, root: number): string {
    const encoded = str.split('').map(item => {
      const convertToNumber = item.charCodeAt(0)
      const convertToString = String
        .fromCharCode(convertToNumber - Number(root))

      return convertToString
    })

    return encoded.join('')
  }
}

export default Cesar
