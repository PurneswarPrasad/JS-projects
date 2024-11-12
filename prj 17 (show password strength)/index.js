const pw = document.getElementById("password");
const indicatorMsg = document.getElementById("indicator-msg");
const strength = document.getElementById("strength");

pw.addEventListener("input", () => {
  if (pw.value.length >= 1 && pw.value.length < 6) {
    strength.innerHTML = "low";
    indicatorMsg.style.color = "red";
    pw.style.border = "1px solid red";
    indicatorMsg.hidden = false;
  } else if (pw.value.length >= 6 && pw.value.length < 10) {
    strength.innerHTML = "medium";
    indicatorMsg.style.color = "yellow";
    pw.style.border = "1px solid yellow";
  } else if (pw.value.length >= 10) {
    strength.innerHTML = "high";
    indicatorMsg.style.color = "green";
    pw.style.border = "1px solid green";
  }
});
