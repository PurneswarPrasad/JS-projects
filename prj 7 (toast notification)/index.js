const parentDiv = document.getElementById("toastBox");

let successMsg =
  '<i class="fa-solid fa-circle-check" style="color:green; margin: 0 20px; font-size:35px;"></i> Successfully submitted!';
let errorMsg =
  '<i class="fa-solid fa-circle-xmark" style="color:red; margin: 0 20px; font-size:35px;"></i> Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation" style="color:orange; margin: 0 20px; font-size:35px;"></i> Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = msg;

  parentDiv.appendChild(toast);

  if (msg.includes("error")) toast.classList.add("error");

  if (msg.includes("Invalid")) toast.classList.add("invalid");

  //so that the notification div gets removed after some time
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
