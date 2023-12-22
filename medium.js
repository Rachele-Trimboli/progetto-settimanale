window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const button = document.querySelector("button");
  const scrollPosition = window.scrollY;
  const scrollImpostato = 100;

  if (scrollPosition > scrollImpostato) {
    header.classList.add("changeColor");
    button.classList.add("changeButton");
  } else {
    header.classList.remove("changeColor");
    button.classList.remove("changeButton");
  }
});

const star = document.querySelector("svg");
console.log(star.innerText);
