function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');


function makingColorBoxes() {

const btnCreate = document.querySelector('[data-create]');
  const btnDestroy = document.querySelector('[data-destroy]');
  


inputEl.addEventListener('input', (event) => {

  const num = Number(inputEl.value);
 
  btnCreate.addEventListener('click', () => {
  
  createBoxes(num);

  });
});
  btnDestroy.addEventListener('click', destroyBoxes);
}

function createBoxes(amount) {
  const listBoxes = [];

  let width = 30;
  let height = 30;

  // for (let i = 0; i < amount; i += 1){
  //   listBoxes.push(`<div class="color-box" style="background-color:${getRandomHexColor()}; width: ${width += 10}px ; height:${height += 10}px;"></div>`);
  // }
  // const divBoxesEl = document.querySelector('#boxes');
  // divBoxesEl.insertAdjacentHTML('beforeend',listBoxes.join('\n'));

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('color-box');
    boxEl.style.backgroundColor = getRandomHexColor();


    boxEl.style.width = width + 'px';
    boxEl.style.height = height + 'px';

    width += 10;
    height += 10;

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
// createBoxes(9);