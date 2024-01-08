const signInButton = document.querySelector('.sign_in_button');
const signUpButton = document.querySelector('.sign_up_button');
const formBox = document.querySelector('.form_box');

signUpButton.addEventListener('click', function() {
    formBox.classList.add('active');
});

signInButton.addEventListener('click', function() {
    formBox.classList.remove('active');
});