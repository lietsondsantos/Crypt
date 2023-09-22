class Cesar {
  encode (str: string, root: number) {
    const encoded = str.split('').map(item => {
      const convertToNumber = item.charCodeAt(0)
      const convertToString = String
        .fromCharCode(convertToNumber + Number(root))

      return convertToString
    })

    return encoded.join('')
  }

  decode (str: string, root: number) {
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
