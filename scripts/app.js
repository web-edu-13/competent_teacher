'use strict'
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
btn.addEventListener('click', () => {
  menu.classList.toggle('menu')
})