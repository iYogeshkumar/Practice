function bubblesort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}
var arr = [4,5,1,2,3];
bubblesort(arr)