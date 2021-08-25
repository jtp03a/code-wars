function digital_root(n) {
  let nArray = Array.from(n.toString()).map(Number);
    while (nArray.length > 1) {
      let sum = 0
      for (i=0;i<nArray.length;i++) {
        sum += nArray[i]
      } 
      nArray = Array.from(sum.toString()).map(Number)
    }
    console.log(Number(nArray[0]))
  }
  
  digital_root(1)