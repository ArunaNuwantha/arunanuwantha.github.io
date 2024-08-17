function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Insert the year into the HTML element with id 'year'
document.getElementById("year").textContent = new Date().getFullYear();
