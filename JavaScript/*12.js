// StrictlyIncreasing


let arr = [1,3,5,6,4,2]
let n = arr.length-1
let arr1 = []
let n1 = arr1.length

let zero = arr.shift(0)
let last = arr.pop(n)
let one = arr.shift(0)
let s2l = arr.pop(n)
let two = arr.shift(0)
let thr2l = arr.pop(n)

arr1.push(zero)
arr1.push(last)
arr1.push(one)
arr1.push(s2l)
arr1.push(two)
arr1.push(thr2l)

console.log(arr1)



