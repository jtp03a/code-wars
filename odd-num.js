function rowSumOddNumbers(n) {
	let numOdds = 0
  for (let i=1;i<=n;i++) {
    numOdds += i
  }
  let lastOdd = 1
  for (let j=1;j<numOdds;j++) {
    lastOdd += 2
  }
  let rowOdds = []
  for (let k=0;k<n;k++) {
    rowOdds.push(lastOdd)
    lastOdd -= 2
  }
  let sumRow = 0
  for (let l=0;l<rowOdds.length;l++) {
    sumRow += rowOdds[l]
  }
  console.log(sumRow)
  return sumRow
}

rowSumOddNumbers(5)
