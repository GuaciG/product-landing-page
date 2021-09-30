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

//Modal popup for images

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const closeBtn = document.querySelector(".close-btn");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //change text and image
    const originalSrc = preview.getAttribute("data-original");
    original.src = originalSrc;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

closeBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
