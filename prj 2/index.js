const inputField = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function crudOperation() {
  if (inputField.value === "") {
    return alert("No ");
  }
  let li = document.createElement("li");
  li.innerHTML = inputField.value;
  listContainer.appendChild(li);

  //creating the cross or Cancel icon
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  //clearing input field
  inputField.value = "";
  saveData();//this is called whenever there is a change in the list to update the local storage
}


//this function manages the tasks. when clicked on the LI tag, it checks off.
//when clicked on the cross icon, it removes the task.
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});


//saves data into the local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//gets data from the local storage
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData()
