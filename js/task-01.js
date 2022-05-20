//** Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. **/

function printInfo() {
const listCategoriesRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listCategoriesRef.length}`);

const infoPrint = [...listCategoriesRef].map(el => {
    
    [...el.querySelectorAll('h2')].map(el => el.innerText);

    return `Categories: ${[...el.querySelectorAll('h2')].map(el => el.innerText)}\nElements: ${(el.querySelectorAll('ul > li')).length}\n`
});

    console.log(infoPrint.join('\n'));
}

printInfo();
