// JavaScript-kod för att hantera modalfönster

const modal = document.getElementById("accessibleModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const openModalBtn = document.getElementById("openModalBtn"); // Antag att detta är knappen som öppnar modalfönstret

openModalBtn.onclick = function () {
  modal.style.display = "block";
  closeModalBtn.focus();
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
  openModalBtn.focus();
};

window.onkeydown = function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    openModalBtn.focus();
  }
};
