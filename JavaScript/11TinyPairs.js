// You are given 2 arrays of integers of equal length 
// array a, and array b and another integer k. 
// You will be iterating through array a from left to 
// right and simultaneously looping through array 
// b from right to left, and looking for pairs (x,y) where 
// x is from a, and y is from b. Let ‘tiny’ equal 
// any concatenated (x,y)pair that is strictly less than k.

// return the number of concatenated (x,y)pairs who’s 
// values are strictly less than k

function countTinyPairs(a, b, k) {
      let pairs = new Set();
    
      for (let i = 0; i < a.length; i++) {
        const j = b.length - i - 1;
        const pair = `${a[i]}${b[j]}`;
        
        if (Number(pair) < k) {
          pairs.add(pair);
        }
      }
      return pairs.size;
    }
    
    const a = [16,1,4,2,14];
    const b = [7,11,2,0,15];
    
    console.log(countTinyPairs(a, b, 743));
