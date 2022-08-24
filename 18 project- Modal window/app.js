'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');
const openBtnModal = document.querySelectorAll('.show-modal');
console.log(openBtnModal);

const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let index = 0; index < openBtnModal.length; index++) {
    openBtnModal[index].addEventListener('click',openModal);
}


closeBtnModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
