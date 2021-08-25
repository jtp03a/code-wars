function narcissistic(value) {
  let nArray = Array.from(value.toString()).map(Number);
  let sum = 0
  for (var i=0; i<nArray.length; i++) {
    const power = nArray[i] ** nArray.length
    sum += power
  }
  if (sum === value) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}

narcissistic(154)