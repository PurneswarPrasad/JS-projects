// github link to the connection to google sheets : github.com/jamiewilson/form-to-google-sheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxY2HnRsObf-HSZeblLkz0zDiyP2lIHbeM7GjI47oeNGBxyd5fHgyCnDiaO343zSaeOyQ/exec";
const form = document.forms["submit-to-google-sheet"];
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successMsg.innerHTML = "Thanks for subscribing!";
      setTimeout(() => {
        successMsg.innerHTML = "";
      }, 3000);
      form.reset(); //resets the form
    })
    .catch((error) => console.error("Error!", error.message));
});
