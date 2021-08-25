function formatDuration (seconds) {
  if (seconds <= 0 ) {
    return 'now'
  }
  let remainderPart
  let wholePart = seconds
  let readableString = ''
  let unit = ''
  for (let i=0;i<5;i++) {
    if ( i === 2) {
      console.log('working on days')
      console.log(wholePart + ' before calc')
      remainderPart = wholePart % 24 
      console.log(remainderPart)
      wholePart = Math.floor(wholePart / 24)
      console.log(wholePart)
    } else if ( i === 4) {
      console.log('working on years')
      remainderPart = wholePart % 365

      wholePart = Math.floor(wholePart / 365)

    } else {
      console.log('working on hours')
      remainderPart = wholePart % 60
  
      wholePart = Math.floor(wholePart / 60)

    }

    if (i === 0) {
      unit = ' seconds'
    } else if (i === 1) {
      unit = ' minutes'
    } else if ( i === 2) {
      unit = ' hours'
    } else if ( i === 3) {
      unit = ' days'
    } else if ( i === 4) {
      unit = ' years'
    }
    readableString += remainderPart + unit
  }
  console.log(readableString)
}

formatDuration(366200)