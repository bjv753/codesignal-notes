let arr = [9,8,7,6,5]
let n = arr.length
let subseq = 0

for(i=0;i<n;i++){
      // check for subseq of length 5
      if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2]
            && arr[i+2]<arr[i+3]&&arr[i+3]>arr[i+4])
            subseq++;
      if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]
            && arr[i+2]>arr[i+3]&&arr[i+3]<arr[i+4])
            subseq++;
      
      // check for subseq of length 4
      if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2]
            && arr[i+2]<arr[i+3])
            subseq++;
      if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]
            && arr[i+2]>arr[i+3])
            subseq++;
      
      // check for subseq of length 3
      if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2])
            subseq++;
      if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2])
            subseq++;
      
      // check for subseq of length 2
      if(arr[i]<arr[i+1])
            subseq++;
      if(arr[i]>arr[i+1])
            subseq++;
}

console.log(subseq)