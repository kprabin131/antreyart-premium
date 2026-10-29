/* ==========================
   MENU TOGGLE
========================== */

function toggleMenu() {

  const menu =
  document.getElementById("menuPanel");

  if(menu.style.right === "20px"){

    menu.style.right = "-350px";

  }else{

    menu.style.right = "20px";

  }

}

/* ==========================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================== */

document.addEventListener("click",(e)=>{

  const menu =
  document.getElementById("menuPanel");

  const menuButton =
  document.querySelector(".menu-button");

  if(
    !menu.contains(e.target) &&
    !menuButton.contains(e.target)
  ){

    menu.style.right = "-350px";

  }

});

/* ==========================
   ESC KEY CLOSE MENU
========================== */

document.addEventListener("keydown",(e)=>{

  if(e.key === "Escape"){

    document.getElementById(
      "menuPanel"
    ).style.right = "-350px";

  }

});

/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar =
document.querySelector(
  ".progress-bar"
);

window.addEventListener(
"scroll",
()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const percent =
(scrollTop / scrollHeight) * 100;

progressBar.style.width =
percent + "%";

});

/* ==========================
   CURSOR GLOW
========================== */

const cursorGlow =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

cursorGlow.style.left =
e.clientX + "px";

cursorGlow.style.top =
e.clientY + "px";

}
);

/* ==========================
   SEARCH PLACEHOLDER ROTATION
========================== */

const searchBox =
document.querySelector(
".search-box"
);

const placeholders = [

"Search planners...",

"Search memo pads...",

"Search calendars...",

"Search habit trackers...",

"Search gifts..."

];

let currentIndex = 0;

setInterval(()=>{

if(searchBox){

currentIndex++;

if(currentIndex >= placeholders.length){

currentIndex = 0;

}

searchBox.setAttribute(
"placeholder",
placeholders[currentIndex]
);

}

},2500);

/* ==========================
   SCROLL REVEALS
========================== */

const revealElements =
document.querySelectorAll(
".featured-section, .story-section, .gallery-section, .planner-highlight, .social-section"
);

function revealOnScroll(){

revealElements.forEach(
(section)=>{

const top =
section.getBoundingClientRect().top;

if(top <
window.innerHeight - 120){

section.classList.add(
"show-section"
);

}

}
);

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
   CATEGORY BUTTON ACTIVE STATE
========================== */

const buttons =
document.querySelectorAll(
".filter-btn"
);

buttons.forEach((button)=>{

button.addEventListener(
"click",
()=>{

buttons.forEach(btn=>{

btn.classList.remove(
"active"
);

});

button.classList.add(
"active"
);

}
);

});

/* ==========================
   PRODUCT CARD TILT EFFECT
========================== */

const cards =
document.querySelectorAll(
".product-card"
);

cards.forEach((card)=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5) * -10;

const rotateY =
((x / rect.width)-0.5) * 10;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

/* ==========================
   HERO PARALLAX
========================== */

const heroArt =
document.querySelector(
".hero-art img"
);

window.addEventListener(
"scroll",
()=>{

if(heroArt){

const value =
window.scrollY * 0.15;

heroArt.style.transform =
`translateY(${value}px)`;

}

});

/* ==========================
   LOADING ANIMATION
========================== */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});
