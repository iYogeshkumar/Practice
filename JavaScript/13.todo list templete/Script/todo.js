var todoArr = JSON.parse(localStorage.getItem('todo'));
console.log(todoArr)

var completed = JSON.parse(localStorage.getItem("complttodos")) || []
getdata(todoArr)

function getdata(todoArr) {
  document.querySelector("tbody").innerHTML ="";
  todoArr.map(function (e, index) {

    var row = document.createElement('tr');

    var col1 = document.createElement('td')
    col1.innerText = e.name;

    var col2 = document.createElement('td')
    col2.innerText = e.qty;
    // sorting(e.qty)
    var col3 = document.createElement('td');
    col3.innerText = e.priority;

    var col4 = document.createElement('button');
    col4.innerText = "Mark as completed";
    col4.addEventListener('click', function () {
      markcompleted(e);
    })

    var col5 = document.createElement("button");

    col5.innerText = "Delete";
    col5.classList = "dltBtn";
    col5.addEventListener("click", function () {
      deleteFunc(index);
    });

    row.append(col1, col2, col3, col4, col5);
    document.querySelector("tbody").append(row)
  })


}


function markcompleted(e) {
  completed.push(e);
  localStorage.setItem("complttodos", JSON.stringify(completed));
}


function handlePriceSort() {
  var selected = document.querySelector("#sort").value;

  console.log(selected);
  if (selected == "high") {
    //descending
    todoArr.sort(function (a, b) {
      return Number(b.qty) - Number(a.qty);
    });
  }
  if (selected == "low") {
    //ascending
    todoArr.sort(function (a, b) {
      return Number(a.qty) - Number(b.qty);
    });
  }
  console.log(todoArr)
  getdata(todoArr)
}



function filterCat() {
  var selected = document.querySelector("#brandFilter").value;
  console.log(selected);

  var filteredList = todoArr.filter(function (elem) {
    return elem.priority == selected;
  });

  console.log(filteredList)
  getdata(filteredList)
}



function deleteFunc(index) {
  todoArr.splice(index, 1);

  localStorage.setItem("complttodos", JSON.stringify(todoArr))
  getdata(todoArr)
};


