"use strict";

// imports
import { addToggles } from "./nav-toggle.js";
import { scrollHeader } from "./shrink-header.js";
import { highlightNavLinks } from "./highlight-navlink.js";

// --- target elements ---
const elements = {
  header: document.getElementById("header"),
  nav: document.getElementById("header-nav"),
  navToggles: document.querySelectorAll(".nav-toggle"),
  menuBtn: document.getElementById("menu-btn"),
  sections: document.querySelectorAll(".section"),
  navLinks: document.querySelectorAll(".nav__navlink"),
};

window.onload = function () {
  addToggles({
    toggles: elements.navToggles,
    nav: elements.nav,
    menuBtn: elements.menuBtn,
  });

  scrollHeader(elements.header);

  highlightNavLinks({
    sections: elements.sections,
    navLinks: elements.navLinks,
    header: elements.header,
  });
};
