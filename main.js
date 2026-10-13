const qBtn = document.querySelectorAll(".question-btn");

qBtn.forEach((x) =>
  x.addEventListener("click", () => {
    x.nextElementSibling.classList.toggle("hidden");
    x.querySelector(".plus-btn").classList.toggle("hidden");
    x.querySelector(".minus-btn").classList.toggle("hidden");
    x.ariaExpanded = x.ariaExpanded === "true" ? "false" : "true";
  }),
);
