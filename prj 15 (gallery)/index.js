let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");

// this makes the effect of scroll with mouse scroll
scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

// scroll with buttons
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // this makes the scroll smoother
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 300;
});
