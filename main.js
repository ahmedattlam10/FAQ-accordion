const qBtn = document.querySelectorAll(".question-btn");
const answ = document.querySelectorAll(".answer");
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");

qBtn.forEach((x) =>
  x.addEventListener("click", () => {
    x.nextElementSibling.classList.toggle("hidden");
    x.querySelector(".plus-btn").classList.toggle("hidden");
    x.querySelector(".minus-btn").classList.toggle("hidden");
    x.ariaExpanded = x.ariaExpanded === "true" ? "false" : "true";
  }),
);
