// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function onClickMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("change");
    var nav = document.getElementById("nav");
    nav.classList.toggle("change");
    var background = document.getElementById("menu-bg");
    background.classList.toggle("change-bg");
}

var readMoreBtn = document.querySelector('.read-more-btn');
var text = document.querySelector('.text');
readMoreBtn.addEventListener('click', showMore, false);

function showMore() {
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    } else {
        readMoreBtn.innerText = 'Read More';
    }
}

var animatie = document.querySelector('div.animatie');
animatie.addEventListener('click', kloppen, false);
animatie.addEventListener('keydown', kloppen, false);
function kloppen() {
  animatie.classList.toggle('hartje');
}
