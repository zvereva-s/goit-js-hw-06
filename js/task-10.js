function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function makingColorBoxes() {
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

let number = 0;


inputEl.addEventListener('input', (event) => {

  number = Number(event.currentTarget.value);

  btnCreate.addEventListener('click', () => {
    createBoxes(number);
  });
});
  btnDestroy.addEventListener('click', destroyBoxes);
}

function createBoxes(amount) {
  
  const arrObj = [];
  const listBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('color-box')
  arrObj.push({ boxEl });
  }
  arrObj.map((el) => el.boxEl.style.backgroundColor = getRandomHexColor());

  let width = 30;
  let height = 30;

  arrObj.map(el => {
    width += 10;
    height += 10;
    el.boxEl.style.width = width + 'px';
    el.boxEl.style.height = height + 'px'
  });
  
  for (const obj of arrObj) {
    listBoxes.push(obj.boxEl)
  }
  const divBoxesEl = document.querySelector('#boxes');
  divBoxesEl.append(...listBoxes);
}

function destroyBoxes() {
 
  const boxesEl = document.querySelectorAll('.color-box');
  boxesEl.forEach(el => el.remove());

  location.reload();
}

makingColorBoxes();
