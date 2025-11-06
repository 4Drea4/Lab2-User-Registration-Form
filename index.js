const customEmailInput = document.getElementById('customEmail');
const customEmailError = document.getElementById('customEmailError');
const customForm = document.getElementById('customValidationForm');
const customUserInput = document.getElementById('customUser');
const customUserError = document.getElementById('customUserError');
const customPWInput = document.getElementById('customPW');
const customPWError = document.getElementById('customPwError');
const confirmPWInput = document.getElementById('confirmPassword');
const confirmPWError = document.getElementById('confirmPWError');

//  email validation logic with input event
customEmailInput.addEventListener('input', function (event) {
  
  if (customEmailInput.validity.typeMismatch) {
    customEmailInput.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
  } else if (customEmailInput.validity.valueMissing) {
    customEmailInput.setCustomValidity('We need your email address to contact you!');
  } else {
    customEmailInput.setCustomValidity('');
  }
  customEmailError.textContent = customEmailInput.validationMessage;
});
//event listener for username
customEmailInput.addEventListener('input', function (event) {
  if(customEmailInput.)


//event listener for password


//event listener for confirm password


//on submit event listener add event.preventDefault()


//Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.


// //Real-time validation: Add input event listeners to each field.
// Check validity using the Constraint Validation API (inputElement.validity).
// For the “Confirm Password” field, explicitly check if it matches the “Password” field.
// Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.





//Use HTML5 validation attributes (e.g., required, type, minlength, pattern).

//Apply the JavaScript Constraint Validation API to check validity and display custom error messages.

//Dynamically create and display error messages next to input fields.

//Handle the form submit event, prevent default submission, and perform final validation.

// keep form submission optional just like your comment
// customForm.addEventListener('submit', function (event) {
//   if (!customForm.checkValidity()) {
//     event.preventDefault();
//   }
// });
