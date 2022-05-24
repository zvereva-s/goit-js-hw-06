function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');


function makingColorBoxes() {

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
  
  btnCreate.addEventListener('click', () => {

    createBoxes(Number(inputEl.value));
  });

  
btnDestroy.addEventListener('click', destroyBoxes);
}

function createBoxes(amount) { 
  const listBoxes = [];

  let width = 20;
  let height = 20;

  if (divBoxesEl.lastElementChild) {
  
    width = parseInt(divBoxesEl.lastElementChild.style.width);
    height = parseInt(divBoxesEl.lastElementChild.style.height);
  }

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('color-box');
    boxEl.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    boxEl.style.width = width + 'px';
    boxEl.style.height = height + 'px';


    listBoxes.push(boxEl);
  }

  divBoxesEl.append(...listBoxes);
}

function destroyBoxes() {
 

  divBoxesEl.innerHTML = '';
  inputEl.value = '';

  location.reload();
}

makingColorBoxes();







//! another solution for createBox()
//**  
  // for (let i = 0; i < amount; i += 1){
  //   listBoxes.push(`<div class="color-box" style="background-color:${getRandomHexColor()}; width: ${width += 10}px ; height:${height += 10}px;"></div>`);
  // }
  // const divBoxesEl = document.querySelector('#boxes');
  // divBoxesEl.insertAdjacentHTML('beforeend',listBoxes.join('\n')); */