function matchOverlap(input, re) {
      var r = [], m;
      // prevent infinite loops
      if (!re.global) re = new RegExp(
        re.source, (re + '').split('/').pop() + 'g'
      );
      while (m = re.exec(input)) {
        re.lastIndex -= m[0].length - 1;
        r.push(m[0]);
      }
      return r;
    }
    
    function algorithm(pattern, s) {
      const VOWELS = 'aeiouy'
    
      if (pattern.match('[^01]'))
        throw new Error('only 0 and 1 allowed in pattern')
      else if (s.match('[^a-z]'))
        throw new Error('only a-z allowed in s')
    
      const generatedRegex = new RegExp(
        pattern
          .replace(/0/g, `[${VOWELS}]`)
          .replace(/1/g, `[^${VOWELS}]`), 'g')
    
      console.log("GENERATED REGEX:", generatedRegex)
    
      const matches = matchOverlap(s, generatedRegex)
      console.log("MATCHES:", matches)
      return matches.length
    }
    
    console.log("FINAL RESULT: " + algorithm('010', 'amazing'))
    
