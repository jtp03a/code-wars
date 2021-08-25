function createPhoneNumber(numbers){
  const areaCode = []
  const firstPart = []
  const lastPart = []
  for (let i=0;i<3;i++) {
    areaCode.push(numbers[i])
  }
  for (let i=3;i<6;i++) {
    firstPart.push(numbers[i])
  }
  for (let i=6;i<10;i++) {
    lastPart.push(numbers[i])
  }
  let phoneNum = ""
  phoneNum = "(" + areaCode.join("") + ") " + firstPart.join("") + "-" + lastPart.join("")
  console.log(phoneNum)
  return phoneNum
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // (123) 456-7890