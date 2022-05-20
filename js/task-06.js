
const formEL = document.querySelector('#validation-input');
const formDataEl = document.querySelector('[data-length="6"]');
const dataLength = formDataEl.dataset.length;



formEL.addEventListener('focus', ()=>{});
formEL.addEventListener('blur', ()=>{});


const onInputValue = formEL.addEventListener('input', (event) => {
    const inputValueLength = event.target.value.length;

    checkInputValid(inputValueLength);
});
 
function checkInputValid(number) {
    return number <= dataLength && number > 0 ? formEL.classList.add('valid') : formEL.classList.add('invalid')    
}


