let x = [1,5,1,2,9,2,3,3,4,6]
let n = x.length

function mfe(x,n) {
      let mfi = []
      for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                  if(x[i]===x[j]){
                        mfi.push(x[i])
                  }
            }
      }
      return mfi
}



console.log(mfe(x,n))