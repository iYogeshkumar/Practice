// remove duplicate number from array
// 1st method
// var arr=[1,2,5,6,2,3,4,5,]

// function removeDuplicate(arr) {
//     arr.sort()
//     var bag=[]
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]!=arr[i+1]){
//             bag.push(arr[i])
//         }
//     }
//     console.log(bag) //[1,2,3,4,5,6]
// }
// removeDuplicate(arr)

// 2nd method
// var arr=[1,2,5,6,2,3,4,5,]
// var unique= Array.from(new Set(arr)) //Set- it stores a collection of unique values.
// console.log(unique)                 //since each value in a Set has to be unique,passing any duplicate item will be removed automatically
//[1,2,5,6,3,4]

///////print dublicate element from array

// var arr=[1,2,5,6,2,3,4,5,]

// var duplicate=arr.filter((item,index) =>index!==arr.indexOf(item))
// console.log(duplicate) //[2,5]



// 2nd method
var arr=[1,2,5,6,2,3,4,5,]

function removeDuplicate(arr) {
   
    var bag=[]
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
            bag.push(arr[i])
        }
        }
        
    }
    console.log(bag) //[1,2,3,4,5,6]
}
removeDuplicate(arr)