class Cesar {
  encrypt(value: string, root: number) {
    const cipher = value.split('').map(item => {
      const convertToNumber = item.charCodeAt(0)
      const convertToString = String
        .fromCharCode(convertToNumber + Number(root))

      return convertToString
    })

    return cipher.join('')
  }

  decrypt(value: string, root: number) {
    const cipher = value.split('').map(item => {
      const convertToNumber = item.charCodeAt(0)
      const convertToString = String
        .fromCharCode(convertToNumber - Number(root))

      return convertToString
    })

    return cipher.join('')
  }
}

export default Cesar
