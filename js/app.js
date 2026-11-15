const products = [
{
    id:1,
    name:"One Day at a Time",
    category:"Planner",
    price:479,
    image:"assets/Planner 1 front with backdrop.jpg",
    description:"Daily planner designed to bring focus and mindfulness."
},

{
    id:2,
    name:"Stop Waiting for Tomorrow",
    category:"Planner",
    price:479,
    image:"assets/Planner 2 with backdrop.jpg",
    description:"Productivity planner for turning ideas into action."
},

{
    id:3,
    name:"The I Will Do It Later List",
    category:"Memo Pad",
    price:199,
    image:"assets/Memo pad 1 with backdrop.jpg",
    description:"Cute panda memo pad for notes and reminders."
},

{
    id:4,
    name:"Before You Forget Write It Down",
    category:"Memo Pad",
    price:199,
    image:"assets/Memo Pad 2 with backdrop.jpg",
    description:"Memo pad designed for quick note-taking."
}
];
function renderProducts(productList){

    const grid = document.getElementById("productGrid");

    if(!grid) return;

    grid.innerHTML = "";

    productList.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>${product.name}</h3>

            <span class="price">
                ₹${product.price}
            </span>

        </div>
        `;

    });
        initializeCardTilt();

}

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
   LIVE SEARCH
================================= */

searchBox.addEventListener("input", () => {

    const searchTerm =
    searchBox.value.toLowerCase();

    const filteredProducts =
    products.filter(product =>

        product.name
        .toLowerCase()
        .includes(searchTerm)

        ||

        product.category
        .toLowerCase()
        .includes(searchTerm)

    );

    renderProducts(filteredProducts);

});

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

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
        button.dataset.category;
        console.log(category);

        if(category === "all"){

            renderProducts(products);

        }else{

            const filteredProducts =
            products.filter(product =>
                product.category === category
            );

            renderProducts(filteredProducts);

        }

    });

});

/* =================================
   CARD TILT EFFECT
================================= */

function initializeCardTilt() {
    console.log("Tilt initialized");
}
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

/* =================================
   BACK TO TOP
================================= */

const topBtn =
document.getElementById("backToTop");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }else{

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

console.log("Tilt initialized");

