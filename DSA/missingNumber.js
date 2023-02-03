//print missing number from the array

// 1st method - sum formula
// var arr=[0,1,2,3,5]
// // var arr1=[3,0,1]

// function missingNumber(arr){
//     var n=arr.length
//     var totalsum= ((n)*(n+1))/2
//     var sum=0
//     for (var i=0; i<n; i++){
//         sum+=arr[i]
//     }
//     return totalsum-sum
// }
// console.log(missingNumber(arr)) // output= 4


//2nd method - 2 for loop
var arr = [0,1,2,3,5];
var n=arr.length;
function missingNumber(arr){
    var sum=0;
    for(var i=0; i<n; i++){
        sum+=arr[i];
    }
    var totalsum=0;
    for(var i=0; i<=5; i++){
        totalsum=totalsum+i;
    }
    return (totalsum-sum)
}
console.log(missingNumber(arr)) // output= 4

//3rd method 
