const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const percent =
(scrollTop / scrollHeight) * 100;

progressBar.style.width = percent + '%';

});

function toggleMenu() {

const menu =
document.getElementById('sideMenu');

if(menu.style.right === '0px'){

menu.style.right = '-300px';

}else{

menu.style.right = '0px';

}

}
