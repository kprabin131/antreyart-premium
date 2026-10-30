/* =================================
   MENU
================================= */

function toggleMenu() {

  const menu = document.getElementById("menuPanel");

  if (menu.style.right === "20px") {
    menu.style.right = "-350px";
  } else {
    menu.style.right = "20px";
  }

}

/* =================================
   CLOSE MENU CLICK OUTSIDE
================================= */

document.addEventListener("click", (e) => {

  const menu = document.getElementById("menuPanel");
  const menuButton = document.querySelector(".menu-button");

  if (
    menu &&
    !menu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    menu.style.right = "-350px";
  }

});

/* =================================
   ESC CLOSE MENU
================================= */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    const menu =
      document.getElementById("menuPanel");

    menu.style.right = "-350px";
  }

});

/* =================================
   SCROLL PROGRESS BAR
================================= */

const progressBar =
  document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent =
    (scrollTop / scrollHeight) * 100;

  if (progressBar) {
    progressBar.style.width = percent + "%";
  }

});

/* =================================
   CURSOR GLOW
================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  if (!cursorGlow) return;

  cursorGlow.style.left =
    e.clientX + "px";

  cursorGlow.style.top =
    e.clientY + "px";

});

/* =================================
   SEARCH PLACEHOLDER ROTATION
================================= */

const searchBox =
  document.querySelector(".search-box");

const placeholders = [

  "Search planners...",

  "Search memo pads...",

  "Search calendars...",

  "Search habit trackers...",

  "Search gift ideas...",

  "Search cute stationery..."

];

let currentPlaceholder = 0;

setInterval(() => {

  if (!searchBox) return;

  currentPlaceholder++;

  if (
    currentPlaceholder >=
    placeholders.length
  ) {
    currentPlaceholder = 0;
  }

  searchBox.placeholder =
    placeholders[currentPlaceholder];

}, 2500);

/* =================================
   REVEAL ON SCROLL
================================= */

const sections = document.querySelectorAll(
  ".featured-section, .story-section, .gallery-section, .planner-highlight, .social-section"
);

function revealSections() {

  sections.forEach((section) => {

    const sectionTop =
      section.getBoundingClientRect().top;

    if (
      sectionTop <
      window.innerHeight - 120
    ) {

      section.style.opacity = "1";

      section.style.transform =
        "translateY(0)";
    }

  });

}

sections.forEach((section) => {

  section.style.opacity = "0";

  section.style.transform =
    "translateY(60px)";

  section.style.transition =
    "all .8s ease";

});

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* =================================
   CATEGORY ACTIVE BUTTONS
================================= */

const filterButtons =
  document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      filterButtons.forEach((btn) => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

    }
  );

});

/* =================================
   CARD TILT EFFECT
================================= */

const cards =
  document.querySelectorAll(".product-card");

cards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 12;

      const rotateX =
        ((y / rect.height) - 0.5) * -12;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-15px)
      `;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    }
  );

});

/* =================================
   HERO PARALLAX
================================= */

const heroImage =
  document.querySelector(".hero-art img");

window.addEventListener("scroll", () => {

  if (!heroImage) return;

  const value =
    window.scrollY * 0.12;

  heroImage.style.transform =
    `translateY(${value}px)`;

});

/* =================================
   HERO TEXT REVEAL
================================= */

window.addEventListener("load", () => {

  const heroTitle =
    document.querySelector(".hero h1");

  const tagline =
    document.querySelector(".tagline");

  const intro =
    document.querySelector(".intro-text");

  if (heroTitle) {

    heroTitle.style.opacity = "0";
    heroTitle.style.transform =
      "translateY(40px)";

    setTimeout(() => {

      heroTitle.style.transition =
        "all .8s ease";

      heroTitle.style.opacity = "1";

      heroTitle.style.transform =
        "translateY(0)";

    }, 300);

  }

  if (tagline) {

    tagline.style.opacity = "0";

    setTimeout(() => {

      tagline.style.transition =
        "all .9s ease";

      tagline.style.opacity = "1";

    }, 700);

  }

  if (intro) {

    intro.style.opacity = "0";

    setTimeout(() => {

      intro.style.transition =
        "all 1s ease";

      intro.style.opacity = "1";

    }, 1000);

  }

});
