const links = document.querySelector(".links");

const hamburger = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", function () {
  // one way
  //   if (links.offsetHeight === 0) links.style.height = "180px";
  //   if (links.offsetHeight !== 0) links.style.height = "0px";

  // another way
  links.classList.toggle("show-links");
});
