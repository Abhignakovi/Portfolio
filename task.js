const header = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-item a");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.add("navbarDark");
    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    header.classList.remove("navbarDark");
    navLinks.forEach((link) => {
      link.style.color = "blue";
    });
  }
});
