const darkIcon = document.getElementsByClassName("moon")[0];
function toggleDark() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkIcon.src = "images/sun.png";
  } else {
    darkIcon.src = "images/moon.png";
  }
}
