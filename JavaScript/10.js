// xzxzx

// You are given a string (s). Without changing the original order of string (s), 
// or adding any white space, Your task is to return the numbers of ways (s) 
// can be ‘split’ into 3 equal or unequal parts(a,b,c) such that,

// string(a+b) != string(b+c) != string(c+a) 

//Note: In this instance ‘+’ means ‘concatenation’. 

// let s = ‘xzxzx’

var str = "xzxzx";
let n = str.length
var count = 0;

for(var i=0;i<n-2;i++){
for(var j=i+1;j<n-1;j++){
var a = str.slice(0,i+1);
var b = str.slice(i+1,j+1);
var c = str.slice(j+1,n);

if(
   (a+b != b+c) && (b+c != c+a) && (a+b != c+a)  
   ){
count++;
      }
   }
}

console.log(count);