const eye = document.getElementById("eye");
const password = document.getElementById("pw");

function showPassword() {
  if (eye.getAttribute("src") === "./images/eye-close.png") {
    eye.setAttribute("src", "./images/eye-open.png");
    password.setAttribute("type", "text");
  } else {
    eye.setAttribute("src", "./images/eye-close.png");
    password.setAttribute("type", "password");
  }

  // alternate

  //   if (password.type === "password") {
  //     eye.src = "./images/eye-open.png";
  //     password.type = "text";
  //   } else {
  //     eye.src = "./images/eye-close.png";
  //     password.type = "password";
  //   }
}
