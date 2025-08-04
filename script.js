window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}



