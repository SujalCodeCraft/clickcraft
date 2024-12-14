// Select elements
const formTitle = document.getElementById('form-title');
const fullNameField = document.getElementById('full-name-field');
const confirmPasswordField = document.getElementById('confirm-password-field');
const submitButton = document.getElementById('submit-button');
const signUpBtn = document.getElementById('sign-up-btn');
const signInBtn = document.getElementById('sign-in-btn');

// Function to switch to Sign Up form
function showSignUpForm() {
    formTitle.textContent = 'Register Now';
    fullNameField.style.display = 'block';
    confirmPasswordField.style.display = 'block';
    submitButton.textContent = 'Sign Up';
}

// Function to switch to Sign In form
function showSignInForm() {
    formTitle.textContent = 'Login';
    fullNameField.style.display = 'none';
    confirmPasswordField.style.display = 'none';
    submitButton.textContent = 'Login';
}

// Event listener for Sign Up button
signUpBtn.addEventListener('click', function () {
    showSignUpForm();
});

// Event listener for Sign In button
signInBtn.addEventListener('click', function () {
    showSignInForm();
});
