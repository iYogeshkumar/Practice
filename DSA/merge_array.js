// 1st method - spread operator
// var arr1=[1,2,3,4]
// var arr2=[5,6,7,8]

// var mergeArr=[...arr1,...arr2]
// console.log(mergeArr)

//2nd method - concat()
// var arr1=[1,2,3,4]
// var arr2=[5,6,7,8]

// var mergeArr=arr1.concat(arr2)
// console.log(mergeArr)

//3rd method- push()
var arr1=[1,2,3,4]
var arr2=[5,6,7,8]
arr1.push(...arr2)
console.log(arr1)