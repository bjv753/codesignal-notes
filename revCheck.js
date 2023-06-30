let a = [16,1,4,2,14]
let b = [7,11,2,0,15]

function check(a,b,k){
      let pairs = new Set()
      let m = a.length
      let n = b.length

      for(i=0;i<m;i++){
            let j = n - i - 1
            let pair = `${a[i]}${b[j]}`

            if(Number(pair)<k){
                  pairs.add(pair)
            }
      }
      return pairs.size
}

console.log(check(a,b,743))