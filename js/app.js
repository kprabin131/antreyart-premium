// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar = document.querySelector(".progress-bar");

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


// =========================
// HAMBURGER MENU
// =========================

const sideMenu =
    document.getElementById("sideMenu");

let menuOpen = false;

function toggleMenu() {

    if (!sideMenu) return;

    if (menuOpen) {

        sideMenu.style.right = "-350px";
        menuOpen = false;

    } else {

        sideMenu.style.right = "20px";
        menuOpen = true;

    }

}


// =========================
// CLOSE MENU WHEN CLICKING
// OUTSIDE THE MENU
// =========================

document.addEventListener("click", (event) => {

    const menuButton =
        document.querySelector(".menu-btn");

    if (!sideMenu || !menuButton) return;

    const clickedInsideMenu =
        sideMenu.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (
        menuOpen &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        sideMenu.style.right = "-350px";
        menuOpen = false;

    }

});


// =========================
// ESC KEY CLOSES MENU
// =========================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        menuOpen
    ) {

        sideMenu.style.right = "-350px";
        menuOpen = false;

    }

});


// =========================
// MENU ANIMATION ON LOAD
// =========================

window.addEventListener("load", () => {

    if (sideMenu) {

        sideMenu.style.right = "-350px";

    }

});
