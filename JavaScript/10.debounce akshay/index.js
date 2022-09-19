let counter=0;

const getdata=()=>{
    //call an api and gets data
    console.log("fetching data..",counter++)
}

const debouncefunction= function(fn,delay){
    let timer;
    return function(){
        let context= this,
        args= arguments;
        clearTimeout(timer);
        
        timer=setTimeout(()=>{
            getdata.apply(context,args);
        },delay);
    }
}

const betterfunctions = debouncefunction(getdata,3000)