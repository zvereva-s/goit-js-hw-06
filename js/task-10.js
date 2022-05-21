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
  const listBoxes = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('color-box');
    boxEl.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;
    boxEl.style.width = width + 'px';
    boxEl.style.height = height + 'px'

    listBoxes.push(boxEl);
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
