// return integers that occur the most in array a

let arr = [1,11,2,3,33,4,55,5,6];
let set1 = new Set()
let digits = []; 

      for(i of arr){
            digits.push(...[...i.toString()])
      }

console.log()
