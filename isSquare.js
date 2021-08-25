var isSquare = function(n){
  const sqrt = Math.sqrt(n)
  if (Number.isInteger(sqrt)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

isSquare(25)