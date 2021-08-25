var uniqueInOrder=function(iterable){
  let uniqueItems = []
  let iterableArray
  iterableArray = Array.from(iterable)
  console.log(iterableArray)
  iterableArray.map((item, index) => {
    if (item !== iterable[index + 1]) {
      uniqueItems.push(item)
    }
  })
  console.log(uniqueItems)
  return uniqueItems
}

//uniqueInOrder('AAAABBBCCDAABBB') //['A','B','C','D','A','B']
uniqueInOrder([1,1,1,1,2,2,2,3,3,3,3,5]) //['A','B','C','D','A','B']