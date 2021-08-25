function rgb(r, g, b){
  console.log(convertHex(r) + convertHex(g) + convertHex(b))
  return convertHex(r) + convertHex(g) + convertHex(b)
}

function convertHex(num) {
  if (num > 255 ) {
    return 'FF'
  }
  if (num < 0 ) {
    return '00'
  }
  const hexLib = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let firstDigit
  firstDigit = Math.floor(num / 16)
  let secondDigit
  secondDigit = num % 16
  return hexLib[firstDigit] + hexLib[secondDigit]
}

rgb(173,255,47)