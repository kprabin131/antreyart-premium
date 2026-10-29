const progressBar = document.querySelector('.progress-bar');
const menu = document.getElementById('sideMenu');

window.addEventListener('scroll', () => {

  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = percent + '%';

});

function toggleMenu() {

  menu.classList.toggle('show-menu');

}

document.addEventListener('click', function (event) {

  const isMenuButton =
    event.target.closest('.menu-btn');

  const isMenu =
    event.target.closest('#sideMenu');

  if (!isMenuButton && !isMenu) {
    menu.classList.remove('show-menu');
  }

});
