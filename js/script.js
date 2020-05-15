'use strict';

let humb = document.querySelector('.checkbox');
let nav = document.querySelector('.header-page');
let logo = document.querySelector('.logo picture source');

let menuLinks = document.querySelectorAll('.nav a');

humb.onclick = function () {
    nav.classList.toggle('is-open');
    if (logo.getAttribute('srcset') === 'svg/logo-mobile-menu.svg') {
        logo.setAttribute('srcset', 'svg/logo-mobile.svg');
    }else {
        logo.setAttribute('srcset', 'svg/logo-mobile-menu.svg');
    }
};

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function () {
        nav.classList.remove('is-open');
        if (logo.getAttribute('srcset') === 'svg/logo-mobile-menu.svg') {
            logo.setAttribute('srcset', 'svg/logo-mobile.svg');
        }else {
            logo.setAttribute('srcset', 'svg/logo-mobile-menu.svg');
        }
    }
}
