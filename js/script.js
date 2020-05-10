'use strict';

let humb = document.querySelector('.checkbox');
let nav = document.querySelector('.header-page');
let logo = document.querySelector('.logo picture source');

humb.onclick = function () {
    nav.classList.toggle('is-open');
    if (logo.getAttribute('srcset') === 'svg/logo-mobile-menu.svg') {
        logo.setAttribute('srcset', 'svg/logo-mobile.svg');
    }else {
        logo.setAttribute('srcset', 'svg/logo-mobile-menu.svg');
    }
};


    [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});