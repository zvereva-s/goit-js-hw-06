
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onPushSubmit);


function onPushSubmit(event) {
    event.preventDefault();
    
    const userData = {};

    const { elements: { email, password } } = event.currentTarget;
   

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    userData.email = email.value;
    userData.password = password.value;

    console.log(userData);
    event.currentTarget.reset;
}
