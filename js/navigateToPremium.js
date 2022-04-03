let buttons = document.querySelectorAll(".premium__cta");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    window.location.href = "premium_terms.html";
  })
);
