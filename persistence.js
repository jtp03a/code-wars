function persistence(num) {
  let nArray = Array.from(num.toString()).map(Number);
  let product = nArray[0]
  let counter = 0
  while (nArray.length > 1) {
    for (let i=1;i<nArray.length;i++) {
      product *= nArray[i]
    }
    nArray = Array.from(product.toString()).map(Number)
    product = nArray[0]
    counter++
  }
  console.log(counter)
  return counter
}

persistence(39) //,3);
persistence(4) //,0);
persistence(25) //,2);
persistence(999) //,4);
