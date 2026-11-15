const products = [
{
    id:1,

    name:"One Day at a Time",

    category:"Planner",

    price:479,

    image:"assets/Planner 1 front with backdrop.jpg",

    tagline:"Plan gently. Dream boldly.",

    description:
    "A planner created for quiet mornings, slow progress and meaningful days.",

    story:
    "Designed to help you focus on progress rather than perfection, one page at a time.",

    highlights:[
        "Monthly Planning",
        "Goal Setting",
        "Reflection Pages",
        "Habit Tracking"
    ],

    review:
    "Every page feels encouraging and surprisingly calming."
},

{
    id:2,

    name:"Stop Waiting for Tomorrow",

    category:"Planner",

    price:479,

    image:"assets/Planner 2 with backdrop.jpg",

    tagline:"Tiny steps. Big progress.",

    description:
    "Built for dreamers who are ready to start today.",

    story:
    "A planner that transforms ideas into actions and intentions into habits.",

    highlights:[
        "Daily Planning",
        "Weekly Focus",
        "Goal Tracking",
        "Progress Reviews"
    ],

    review:
    "The layouts make planning easy instead of overwhelming."
},

{
    id:3,

    name:"The I Will Do It Later List",

    category:"Memo Pad",

    price:199,

    image:"assets/Memo pad 1 with backdrop.jpg",

    tagline:"Save future-you some stress.",

    description:
    "A playful memo pad for reminders, ideas and everything in between.",

    story:
    "Because great ideas deserve to be remembered before they disappear.",

    highlights:[
        "Easy Tear Sheets",
        "Cute Panda Design",
        "Daily Notes",
        "To-Do Lists"
    ],

    review:
    "The cutest way to stay organised."
},

{
    id:4,

    name:"Before You Forget",

    category:"Memo Pad",

    price:199,

    image:"assets/Memo Pad 2 with backdrop.jpg",

    tagline:"Catch ideas before they fly away.",

    description:
    "A cheerful space for thoughts, reminders and sudden inspiration.",

    story:
    "Perfect for desks, study spaces and moments of creativity.",

    highlights:[
        "Quick Notes",
        "Creative Prompts",
        "Personal Reminders",
        "Cute Illustrations"
    ],

    review:
    "My desk finally feels organised and fun."
}
];
function renderProducts(productList){

    const grid = document.getElementById("productGrid");

    if(!grid) return;

    grid.innerHTML = "";

    productList.forEach(product => {

        grid.innerHTML += `
<div
class="product-card"
data-id="${product.id}">
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
    initializeProductModal();

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
    searchBox.value
    .toLowerCase()
    .trim();

    const resultCounter =
    document.getElementById(
        "searchResultCount"
    );

    if(searchTerm === ""){

        renderProducts(products);

        resultCounter.textContent = "";

        return;
    }

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

    if(filteredProducts.length === 0){

        resultCounter.textContent =
        "No products found";

    }else{

        resultCounter.textContent =
        `${filteredProducts.length} product(s) found`;

    }

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

       const comingSoonMessage =
document.getElementById(
    "comingSoonMessage"
);

if(category === "all"){

    renderProducts(products);

    comingSoonMessage.style.display =
    "none";

}else{

    const filteredProducts =
    products.filter(product =>
        product.category === category
    );

    renderProducts(filteredProducts);

    if(filteredProducts.length === 0){

        comingSoonMessage.style.display =
        "block";

        comingSoonMessage.innerHTML =
        `✨ ${category} collection is launching soon. Stay tuned!`;

    }else{

        comingSoonMessage.style.display =
        "none";

    }

}

    });

});

/* =================================
   CARD TILT EFFECT
================================= */

function initializeCardTilt() {
    document
.getElementById("closeModal")
.addEventListener("click",()=>{

    document
    .getElementById("productModal")
    .style.display =
    "none";

});
    console.log("Tilt initialized");
}

function initializeProductModal(){

    const cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            const productId =
            Number(card.dataset.id);

            const product =
            products.find(
                p => p.id === productId
            );

            if(!product) return;

            document.getElementById(
                "modalImage"
            ).src = product.image;

            document.getElementById(
                "modalCategory"
            ).textContent =
            product.category;

            document.getElementById(
                "modalTitle"
            ).textContent =
            product.name;

            document.getElementById(
                "modalTagline"
            ).textContent =
            product.tagline;

            document.getElementById(
                "modalPrice"
            ).textContent =
            `₹${product.price}`;

            document.getElementById(
                "modalDescription"
            ).textContent =
            product.description;

            document.getElementById(
                "modalStory"
            ).textContent =
            product.story;

            document.getElementById(
                "modalReview"
            ).innerHTML =
            `★★★★★<br><br>${product.review}`;

            document.getElementById(
                "modalHighlights"
            ).innerHTML =
            `
            <h3>✨ What's Inside</h3>
            <ul>
                ${product.highlights
                    .map(item =>
                    `<li>${item}</li>`)
                    .join("")}
            </ul>
            `;

            document.getElementById(
                "productModal"
            ).style.display =
            "flex";

        });

    });

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

