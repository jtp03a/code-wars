var number = function(busStops){
  let total = 0
  busStops.map(stop => {
    total += stop[0]
    total -= stop[1]
  })
  console.log(total)
  return total
}

number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) // 21