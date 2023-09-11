const loginForm = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const loginFormElements = {};
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value === '' || password.value === '') {
        alert('Будь ласка, заповніть всі поля форми.');
    } else {
        loginFormElements.email = email.value;
        loginFormElements.password = password.value;
        console.log(loginFormElements);
        loginForm.reset();
    }
});
