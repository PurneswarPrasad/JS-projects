// const API_KEY = "2MiSbhwzd1NWsAiKU2rKig==QcYYi2Sy5670mUbY";
// const API_URL = "https://api.api-ninjas.com/v1/passwordgenerator?length=16&";

// const generatePasswordBtn = document.getElementById("generate-password-btn");
// const inputBox = document.getElementById("password");

// generatePasswordBtn.addEventListener("click", async () => {
//   const data = await (await fetch(API_URL + "&x-api-key=" + API_KEY)).json();
//   const randPassword = data.random_password;
//   inputBox.value = randPassword;
// });

// 
// ------------ Above method is to get random password from random password API ------------------------------------------

// ------------ Below method is to create a random password generator ------------------------------------------

const inputBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~`|}{[]\\:;?><,./-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  while (password.length < 16) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
}

document.getElementById("copy-icon").addEventListener("click", () => {
  //   document.execCommand("copy");

  // execCommand is deprecated, navigator is used newly

  inputBox.select();
  navigator.clipboard.writeText(inputBox.value).then(() => {
    const icon = document.getElementById("copy-icon");

    icon.setAttribute("disabled", "true"); // disables the copy icon for 5s after copying once

    setTimeout(() => {
      icon.removeAttribute("disabled");
    }, 5000);
  });
});
