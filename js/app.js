function toggleMenu() {
  const menu = document.getElementById("sideMenu");

  if (menu.style.right === "20px") {
    menu.style.right = "-350px";
  } else {
    menu.style.right = "20px";
  }
}

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (scrollTop / scrollHeight) * 100;

  if (progressBar) {
    progressBar.style.width = percent + "%";
  }
});
