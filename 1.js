// Reverse Push / Add to Set
let a = [16,1,4,2,14]
let b = [7,11,2,0,15]
let m = a.length
let n = b.length
let k = 743
let pairs = new Set()

function check(){
      for(i=0;i<m;i++){
            let j = n - i - 1
            let pair = `${a[i]}${b[j]}`
            if(Number(pair)<k){
                  pairs.add(pair)
            }
      }
      return pairs.size
}

console.log(check())