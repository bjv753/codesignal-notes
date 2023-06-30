
function dbk(a,n,k){
      let count = 0;
      for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                  // console.log(a[i] + '+')
                  // console.log(a[j] + '//')
                  if((a[i]+a[j])%k==0)
                  count++;
            }
      }
      return count
}

let a = [1,2,2,3,5,7] // 5+4+3+2+1  (n-1)!+
let n = a.length
let k = 4

console.log(dbk(a,n,k));