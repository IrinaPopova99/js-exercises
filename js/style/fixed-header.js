// let menu = document.querySelector('.menu'),
let positionMenu = menu.offsetTop,
    bodyBlock = document.querySelector('body');

window.addEventListener('scroll', function fixedHeader() {
    if (window.pageYOffset >= positionMenu) {
        menu.classList.add('menu-fixed');
        bodyBlock.style.paddingTop = '60px';
    } else {
        menu.classList.remove('menu-fixed');
        bodyBlock.style.paddingTop = '0px';
    }
});