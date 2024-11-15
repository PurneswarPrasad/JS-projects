const selectBox = document.getElementById("selectField");
const selectText = document.getElementById("selectText");

const lists = document.getElementById("list");

const options = document.getElementsByClassName("options");

const arrowIcon = document.getElementById("arrow");

console.log(lists.style.visibility);

selectBox.addEventListener("click", () => {
  if (lists.style.visibility === "hidden") {
    lists.style.visibility = "visible";
    arrowIcon.classList.toggle("rotate");
  } else {
    lists.style.visibility = "hidden";
    arrowIcon.classList.toggle("rotate");
  }
});

for (option of options) {
  option.addEventListener("click", (e) => {
    selectText.innerHTML = e.target.textContent;
    lists.style.visibility = "hidden";
    arrowIcon.classList.toggle("rotate");
  });
}
