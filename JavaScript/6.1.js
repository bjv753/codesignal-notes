// MostFrequentInteger

// return integers that occur the most in array a

let arr = [1,11,2,3,33,4,55,5,6];
let set1 = new Set()
let digits = []; 

      for(i of arr){
          digits.push(...[...i.toString()].map(Number))
      }

let n = digits.length;

      for(i=0;i<n;i++){
            if(digits[i]===digits[i+1])
            set1.add(...[digits[i]])
      }

console.log(set1)