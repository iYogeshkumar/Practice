var completedtodo = JSON.parse(localStorage.getItem("complttodos"));
function displaydata(completedtodo) {
  document.querySelector("tbody").innerHTML = "";
  completedtodo.map(function (e) {
    var row = document.createElement("tr");

    var col1 = document.createElement("td");
    col1.innerText = e.name;

    col2.innerText = e.qty;

    var col3 = document.createElement("td");
    col3.innerText = e.priority;

    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}
displaydata(completedtodo)


var totalQty = completedtodo.reduce(function (acc, e) {
  return acc + Number(e.qty);
}, 0);

document.querySelector("h1").innerText = totalQty;

//   console.log(totalQty);

function handlePriceSort() {
  var selected = document.querySelector("#sort").value;

  console.log(selected);
  if (selected == "high") {
    //descending
    completedtodo.sort(function (a, b) {
      return Number(b.qty) - Number(a.qty);
    });
  }
  if (selected == "low") {
    //ascending
    completedtodo.sort(function (a, b) {
      return Number(a.qty) - Number(b.qty);
    });
  }
  // console.log(todoArr);
  displaydata(completedtodo);
}
