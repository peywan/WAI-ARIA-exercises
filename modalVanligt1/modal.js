const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.onclick = function () {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  showModalBtn.focus();
};

modal.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    showModalBtn.focus();
  }
});
