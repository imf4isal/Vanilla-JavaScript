const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");

toggle.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

close.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
