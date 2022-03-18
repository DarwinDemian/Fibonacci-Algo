const bar = (nums) => {
  let lastNum = 0 
  let currNum = 1

  for (let i = 1; i <= nums; i++) {    
    console.log(currNum)
    currNum += lastNum
    lastNum = currNum - lastNum 
  }
}

bar(10)
