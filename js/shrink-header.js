export function scrollHeader(header) {
  // shrinks header when the page is scrolled

  window.addEventListener("scroll", () => {
    window.scrollY > header.offsetHeight
      ? header.classList.add("header-shrinked")
      : header.classList.remove("header-shrinked");
  });
}
