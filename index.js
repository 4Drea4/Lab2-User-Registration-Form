const customEmailInput = document.getElementById('customEmail');
const customEmailError = document.getElementById('customEmailError');
const customForm = document.getElementById('customValidationForm');
const customUserInput = document.getElementById('customUser');
const customUserError = document.getElementById('customUserError');
const customPWInput = document.getElementById('customPW');
const customPWError = document.getElementById('customPwError');
const confirmPWInput = document.getElementById('confirmPassword');
const confirmPWError = document.getElementById('confirmPWError');

// your existing email validation logic
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

// keep form submission optional just like your comment
// customForm.addEventListener('submit', function (event) {
//   if (!customForm.checkValidity()) {
//     event.preventDefault();
//   }
// });
