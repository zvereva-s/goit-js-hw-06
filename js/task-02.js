const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//! решение "№1"//

// function makeListItem(arr) {
//   const ulEl = document.querySelector('#ingredients');

//   ulEl.insertAdjacentHTML('beforeend', ((arr.map(el => `<li class="item">${el}</li>`)).join('\n')));
// }

// console.log(makeListItem(ingredients));




//! решение №2//

function makeListItem(arr) {
  const list = (arr.map(el => {
    const listItemTag = document.createElement('li');
    listItemTag.classList.add('item');
    listItemTag.textContent = el;
    return listItemTag;
  }));

const ulEl = document.querySelector('#ingredients');
ulEl.append(...list);
}

makeListItem(ingredients);
