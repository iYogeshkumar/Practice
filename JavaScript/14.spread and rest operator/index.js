/* spread operator is used to expand an array or object literals */
//  eg;-
var arr1= [1,2,3]
var arr2= [...arr1,4,5]

console.log(arr2) //[1,2,3,4,5]

//rest operator - when the spread operator is used as a parameter, it is known as rest operator

function x(b,...a){
    console.log(b,a)
}
x(5,6,7)