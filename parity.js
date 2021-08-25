function findOutlier(integers){
  let odds = []
  let evens = []
  integers.map(number => {
    if (number % 2 === 0) {
      evens.push(number)
    } else {
      odds.push(number)
    }
  })
  if (evens.length === 1) {
    console.log(evens[0])
    return evens[0]
  }
  if (odds.length === 1) {
    console.log(odds[0])
    return odds[0]
  }
}

findOutlier([2,6,8,10,3])