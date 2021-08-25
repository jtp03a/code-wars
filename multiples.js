function solution(number){
  if (number < 0) {
    return 0
  }
  let sum = 0
  for (let i=1;i<number;i++) {
    if ((i % 3 === 0) || (i % 5 === 0)){
      console.log(`The current index of ${i} is a multiple of 3 or 5`)
      sum += i
    }
    }
    console.log(sum)
    return sum
}

solution(10)

