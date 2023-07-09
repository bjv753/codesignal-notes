const a = [16,1,4,2,14];
let m = a.length
const b = [7,11,2,0,15];
let n = b.length

function countTinyPairs(a, b, k) {
      let pairs = new Set();
      for (let i = 0; i < m; i++) {
        const j = n - i - 1;
        const pair = `${a[i]}${b[j]}`;
        if (Number(pair) < k) {
          pairs.add(pair);
        }
      }
      return pairs.size;
    }
    
    console.log(countTinyPairs(a, b, 743));