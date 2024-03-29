//print missing number from the array

// 1st method - sum formula ----time comp=O(N) space comp=O(1)
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


//2nd method - 2 for loop ----time comp=O(N) space comp=O(1)
// var arr = [0,1,2,3,5];
// var n=arr.length;
// function missingNumber(arr){
//     var sum=0;
//     for(var i=0; i<n; i++){
//         sum+=arr[i];
//     }
//     var totalsum=0;
//     for(var i=0; i<=5; i++){
//         totalsum=totalsum+i;
//     }
//     return (totalsum-sum)
// }
// console.log(missingNumber(arr)) // output= 4


//3rd method - Bit manipulation XOR method---- more appropiate method
// time comp-O(N) Space comp- O(1)
var arr=[0,1,2,3,5]
function missingNumber(arr) {
    var result =0;
    for(var i=0; i<arr.length; i++) {
        result^=arr[i] ^(i+1)
    }
    return result;
}
console.log(missingNumber(arr)) // output=4

