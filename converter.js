const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-link");
  }
});

function convert() {
  console.log("Conversion function called");
}
