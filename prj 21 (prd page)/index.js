const manImage = document.getElementById("man-image");

//here Array.from is needed because getElementsByClassName returns a HTML collection
//we can use for-loop in an Array but not a HTML Collection, which is also array-like but not exactly
//Now we can use for-each
const spanBtns = Array.from(document.getElementsByClassName("btn"));
const images = [
  "./images/image1.png",
  "./images/image2.png",
  "./images/image3.png",
];

spanBtns.forEach((span, i) => {
    span.addEventListener("click", () => {
      manImage.setAttribute("src", images[i]);
  
      spanBtns.forEach((span) => span.classList.remove("active"));
  
      span.classList.add("active");
    });
  });

// ----------------------------------------- FOR LOOP APPROACH -------------------------

// spanBtns[0].addEventListener("click", () => {
//   manImage.setAttribute("src", "./images/image1.png");
//   for (span of spanBtns) {
//     span.classList.remove("active");
//   }
//   this.classList.add("active");
// });

// spanBtns[1].addEventListener("click", () => {
//   manImage.setAttribute("src", "./images/image2.png");
//   for (span of spanBtns) {
//     span.classList.remove("active");
//   }
//   this.classList.add("active");
// });

// spanBtns[2].addEventListener("click", () => {
//   manImage.setAttribute("src", "./images/image3.png");
//   for (span of spanBtns) {
//     span.classList.remove("active");
//   }
//   this.classList.add("active");
// });


