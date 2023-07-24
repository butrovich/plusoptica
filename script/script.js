let toggleBtn = document.querySelector(".toggle-btn");
let toggleBtnIcon = document.querySelector(".toggle-btn i");
let desplegable = document.querySelector(".desplegable");

toggleBtn.onclick = function () {
  desplegable.classList.toggle("open");
  const isOpen = desplegable.classList.contains("open");

  toggleBtnIcon.classList = isOpen
  ? "fa-solid fa-xmark"
  : "fa-solid fa-bars";
}