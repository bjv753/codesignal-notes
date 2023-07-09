// STSubSequence

// Count the number of contiguous subarrays containing at 
// least two elements that represent a saw tooth sequence.

let arr = [9,8,7,6,5]
let n = arr.length
let subseq = 0

function subSeq(){
      for(i=0;i<n;i++){
            // check for subseq of length 5 starting with an increase
            if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2]
                  && arr[i+2]<arr[i+3] && arr[i+3]>arr[i+4])
                  subseq++;
            // check for subseq of length 5 starting with a decrease
            if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]
                  && arr[i+2]>arr[i+3] && arr[i+3]<arr[i+4])
                  subseq++;
            
            // check for subseq of length 4 starting with an increase
            if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2]
                  && arr[i+2]<arr[i+3])
                  subseq++;
            // check for subseq of length 4 starting with a decrease
            if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]
                  && arr[i+2]>arr[i+3])
                  subseq++;
            
            // check for subseq of length 3 starting with an increase
            if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2])
                  subseq++;
            // check for subseq of length 3 starting with a decrease
            if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2])
                  subseq++;
            
            // check for subseq of length 2 starting with an increase
            if(arr[i]<arr[i+1])
                  subseq++;
            // check for subseq of length 2 starting with a decrease
            if(arr[i]>arr[i+1])
                  subseq++;
      }
      return subseq
}

console.log(subSeq())