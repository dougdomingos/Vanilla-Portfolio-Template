export function addToggles({ toggles, nav, menuBtn }) {
  // add toggle functionality to all .nav-toggle elements

  toggles.forEach((item) => {
    item.addEventListener("click", () => {
      // makes navbar cover screen
      nav.classList.toggle("h-100");
      // add transition effect to menu-btn
      menuBtn.classList.toggle("menu-active");
    });
  });
}
