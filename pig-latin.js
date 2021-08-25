function pigIt(str){
  let wordArr = str.split(' ')
  let finalStr = ''
  let piglatinizedWord
  for (let i=0;i<wordArr.length;i++) {
    if (wordArr[i].match(/^[a-zA-Z]+$/)) {
      let ltrArr = wordArr[i].split('')
      ltrArr.push(ltrArr[0] + 'ay')
      ltrArr.shift()
      piglatinizedWord = ltrArr.join('')
      finalStr += piglatinizedWord
    } else {
      finalStr += wordArr[i]
    }
    if (i < wordArr.length -1 ) {
      finalStr += ' '
    }
  }
  console.log(finalStr)
  return finalStr
}

pigIt('O tempora o mores !') //,'hisTay siay ymay tringsay')