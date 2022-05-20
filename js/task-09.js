function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');

btnEl.addEventListener('click', onPushBtnChangeColor);

function onPushBtnChangeColor(event) {
  if (event) {
    bodyEl.style.backgroundColor = getRandomHexColor();
    textEl.textContent = getRandomHexColor();
  }
}
