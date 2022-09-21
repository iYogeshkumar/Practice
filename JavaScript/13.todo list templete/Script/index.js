document.getElementById("form").addEventListener("submit", myformsubmit);
var todoarr=JSON.parse(localStorage.getItem("todo")) ||[]
function myformsubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var qty = document.getElementById("qty").value;
    var priority = document.getElementById("priority").value;

    let todoobj={
        name: name,
        qty: qty,
        priority: priority
    }
    todoarr.push(todoobj);
    // console.log(todoarr);
    localStorage.setItem("todo",JSON.stringify(todoarr));

}