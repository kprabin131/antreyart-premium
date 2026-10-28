const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {

const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(scrollTop / scrollHeight) * 100;

progressBar.style.width = scrolled + '%';

});
