//menu responsive functionalily
const menuList = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburger");

document.onclick = function (e) {
  //close menuList and hamburger come back to normal status
  if (e.target.id !== "menu" && e.target.id !== "hamburger") {
    hamburgerBtn.classList.remove("active");
    menuList.classList.remove("active");
  }
};

//when clicking hamburger button, you open menuList and hamburger get crossed
hamburgerBtn.onclick = function () {
  hamburgerBtn.classList.toggle("active");
  menuList.classList.toggle("active");
};

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-gallery img");
const fullImage = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const closeBtn = document.querySelector(".close-btn");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    fullImage.classList.add("open");
    //change image
    const originalSrc = preview.getAttribute("src");
    fullImage.src = originalSrc;
    //change text
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
