const id = (id) => document.getElementById(id);

const openMenu = id("open-menu"),
  closeMenu = id("close-menu"),
  overlay = id("overlay"),
  mobileNav = id("mobile-nav");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
});
