
const formImputEL = document.querySelector('#validation-input');





formImputEL.addEventListener('blur', (event) => {
    if (formImputEL.value.length === formImputEL.getAttribute('data-length')) {
        formImputEL.classList.remove('valid');
        formImputEL.classList.add('invalid');
    } else {
        formImputEL.classList.add('valid');
        formImputEL.classList.remove('invalid');
    }
})


