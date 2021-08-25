function calculate(num1, calcArray) {
  let result
  switch(calcArray[1]) {
    case 'addition':
      result = num1 + calcArray[0]
      break;
    case 'subtraction':
      result = num1 - calcArray[0]
      break;
    case 'multiplication':
      result = num1 * calcArray[0]
      break;
    case 'division':
      result = num1 / calcArray[0]
      break;
  }
  return result
}

function zero(calcArray) {
  if (!calcArray) {
    return 0
  } else {
    let result
    result = calculate(0, calcArray)
    return result
  }
}
function one(calcArray) {
  if (!calcArray) {
    return 1
  } else {
    console.log(calculate(1, calcArray))
  }
}
function two(calcArray) {
  if (!calcArray) {
    return 2
  } else {
    console.log(calculate(2, calcArray))
  }
}
function three(calcArray) {
  if (!calcArray) {
    return 3
  } else {
    console.log(calculate(3, calcArray))
  }
}
function four(calcArray) {
  if (!calcArray) {
    return 4
  } else {
    console.log(calculate(4, calcArray))
  }
}
function five(calcArray) {
  if (!calcArray) {
    return 5
  } else {
    console.log(calculate(5, calcArray))
  }
}
function six(calcArray) {
  if (!calcArray) {
    return 6
  } else {
    console.log(calculate(6, calcArray))
  }
}
function seven(calcArray) {
  if (!calcArray) {
    return 7
  } else {
    console.log(calculate(7, calcArray))
  }
}
function eight(calcArray) {
  if (!calcArray) {
    return 8
  } else {
    console.log(calculate(8, calcArray))
  }
}
function nine(calcArray) {
  if (!calcArray) {
    return 9
  } else {
    console.log(calculate(9, calcArray))
  }
}

function plus(num2) {
  return [num2, 'addition']
}
function minus(num2) {
  return [num2, 'subtraction']
}
function times(num2) {
  return [num2, 'multiplication']
}
function dividedBy(num2) {
  return [num2, 'division']
}

seven(times(five()))
four(plus(nine()))
eight(minus(three()))
six(dividedBy(two()))