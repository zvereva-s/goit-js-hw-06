function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let quantityOfDivEl = 0;
// function checkingInputvalue() {
  const inputEl = document.querySelector('input');
  const btnCreate = document.querySelector('[data-create]');

  inputEl.addEventListener('input', () => {});
  btnCreate.addEventListener('click', (event) => {
  console.log();
});




// }

function createBoxes(amount) {
  let boxEl;
  const arrObj = [];

  for (let i = 0; i <= amount; i += 1) {
    boxEl = document.createElement('div');
    arrObj.push({ boxEl });
  }
  arrObj.map((el) => el.boxEl.style.backgroundColor = getRandomHexColor());

  let width = 30;
  let height = 30;

  //на каждой итерации + 10пкс
  //к-во 10 итераций * 10пикс

  for (let i = 0; i <= 10 * amount; i += 1) {
    width += 10;
    arrObj.map(el => {
      el.boxEl.style.width = width + 'px'
    });

    height += 10; 
    arrObj.map((el) => el.boxEl.style.height = height + 'px');
  }
  console.log(arrObj[1].boxEl);
  console.log(arrObj);
}
console.log(createBoxes(10));


//! obj = { ==> скорее всего это массив объектов//
// boxEl1: document.createElement('div'),
// boxEl2: document.createElement('div'),
//!}
//! boxEl1.style.width = 30px;
//! boxEl1.style.heigth = 30px;
//! boxEl1.style.background-color = getRandomHexColor();
//! boxEl2.style.width = 40px;
//! boxEl2.style.heigth = 40px;
//! boxEl2.style.background-color = getRandomHexColor();

//TODO amount === length arr or obj === к-во итераций при переборе и добавлении стилей

//? при переборе и добавлении стилей - шаблонная строка или просто +10 к значению или доп переменная

