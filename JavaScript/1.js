// ConcatSum

// Calculate the sum of every a[i] ° a[j] 
// concatenation for, string a = [10,2]

let a = [10,2]
let n = a.length
let sum = 0

function concatSum(){
for(i=0;i<n;i++)
      for(j=0;j<n;j++)
            sum += Number(`${a[i]}${a[j]}`);
           return sum
      }

console.log(concatSum())