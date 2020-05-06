'use strict';

let humb = document.querySelector('.humb');
let clouse = document.querySelector('.clouse');
let nav = document.querySelector('.nav');

humb.onclick = function () {
    nav.classList.add('is-open');
};

clouse.onclick = function () {
    nav.classList.remove('is-open');
};