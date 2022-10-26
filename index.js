// Variables
const searchBtn = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  searchBtn.classList.toggle("active");
  input.focus();
});
