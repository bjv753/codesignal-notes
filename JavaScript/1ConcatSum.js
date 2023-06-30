// Calculate the sum of every a[i] ° a[j] 
// concatenation for, string a = [10,2]

let arr = [10,2]
let n = arr.length
let sum = 0

function concatSum(arr){
for(i=0;i<n;i++)
      for(j=0;j<n;j++)
           sum += Number(''+arr[j]+arr[i]);
           return sum
      }

console.log(concatSum(arr))