function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

let options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

// Date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// Top Link
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if(scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Scroll Link
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault()

    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    })
  });
});

