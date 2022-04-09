export function highlightNavLinks({ sections, navLinks, header }) {
  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - header.offsetHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.getAttribute("href").includes(currentSection)
        ? link.classList.add("navlink-active")
        : link.classList.remove("navlink-active");
    });
  });
}
