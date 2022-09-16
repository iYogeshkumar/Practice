document.querySelector("form").addEventListener("submit", todolist);



var todoArr=JSON.parse(localStorage.getItem("todoTodo"))||[];
createTable(todoArr)
function todolist(event) {
    event.preventDefault();
    var item = document.querySelector("#item").value
    var qty = document.querySelector("#qty").value

    var taskList={
        itemName: item,
        itemQty: qty
    }

    todoArr.push(taskList);
    localStorage.setItem("todoTodo",JSON.stringify(todoArr))
    createTable(todoArr)
}

function createTable(todoArr){
    document.querySelector("tbody").innerHTML="";
    todoArr.map(function (elem){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.itemName;

        var td2=document.createElement("td")
        td2.innerText=elem.itemQty;

        var td3=document.createElement("button")
        td3.innerText="delete";

        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    })

}