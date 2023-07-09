// You are given a string (s). Without changing the original order of string (s), 
// or adding any white space, Your task is to return the numbers of ways (s) 
// can be ‘split’ into 3 equal or unequal parts(a,b,c) such that,

// string(a+b) != string(b+c) != string(c+a) 

//Note: In this instance ‘+’ means ‘concatenation’. 

// let s = ‘xzxzx’

let str = 'xyz'
let n = str.length

for(i=0;i<n;i++){
      for(j=0;j<n;j++){
            let shot = str.slice(i)
            console.log(shot)
      }
}