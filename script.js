function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});
