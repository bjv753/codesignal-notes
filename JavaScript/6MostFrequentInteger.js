

let arr = [1,11,2,3,33,4,55,5,6];
let set1 = new Set()
let digits = [];

      for(n of arr){
          digits.push(...[...n.toString()].map(Number))
      }

      // console.log(digits)

let x = digits.length;

      for(i=0;i<x;i++){
            if(digits[i]===digits[i+1])
            set1.add(...[digits[i]])
      }

console.log(set1)