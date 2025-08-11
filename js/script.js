const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menu_close = document.getElementById("menuClose");
const overlay = document.getElementById("overlay");
const mode = document.querySelector(".mode");
const customize = document.getElementById("customize-btn");
const customize_menu = document.getElementById("cust-menu");
const customize_close = document.getElementById("customize-close");
const hero_background = document.getElementById("hero-background");
const background_color = document.getElementById("background");
const apply_btn = document.getElementById("apply-btn");

function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

function toggleMode() {
  var link = document.querySelector("[href*='style']");
  link.href = link.href.includes("style.css")
    ? "css/style2.css"
    : "css/style.css";
}

function openCustomize() {
  customize_menu.style.display = "block";
  overlay.classList.add("active");
}

function closeCustomize() {
  customize_menu.style.display = "none";
  overlay.classList.remove("active");
}

function changeHeroColor() {
  hero_background.style.backgroundColor = background_color.value;
}

hamburger.addEventListener("click", openMenu);
menu_close.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
mode.addEventListener("click", toggleMode);
customize.addEventListener("click", openCustomize);
customize_close.addEventListener("click", closeCustomize);
apply_btn.addEventListener("click", changeHeroColor);
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") closeCustomize();
});
