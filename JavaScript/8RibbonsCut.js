const solve2 = (a,k) => {
      const max = Math.max(...a);
      for(let i = max; i>0; i--) {
            let ribbon = 0;
            a.forEach((item) => {
                  ribbon += Math.floor(item / i);
            });
            if(ribbon >= k) {
                  return i;
            }
      }
      return 0;
};

console.log(solve2([7,5,9],4));