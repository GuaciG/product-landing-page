const menuList = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburger");

document.onclick = function (e) {
  if (e.target.id !== "menu" && e.target.id !== "hamburger") {
    hamburgerBtn.classList.remove("active");
    menuList.classList.remove("active");
  }
};

hamburgerBtn.onclick = function () {
  hamburgerBtn.classList.toggle("active");
  menuList.classList.toggle("active");
};
