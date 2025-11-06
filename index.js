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
console.log(customEmailInput);

//event listener for username
customUserInput.addEventListener('input', function () {
  if(customUserInput.validity.tooShort){
    customUserInput.setCustomValidity('This usernmae is too short, please make it longer');
  }else if (customUserInput.validity.valueMissing){
    customUserInput.setCustomValidity('Please enter a username');
  }else{
    customUserInput.setCustomValidity('');
  }
  customUserError.textContent =customUserInput.validationMessage;
});
    console.log(customUserInput);


    //event listener for password
customPWInput.addEventListener('input', function (){

  //if empty
  if (customPWInput.validity.valueMissing){
    customPWInput.setCustomValidity('Please enter your password.')

      //too short error message
  }else if (customPWInput.validity.tooShort){
    customPWInput.setCustomValidity('This password is too short');
//doesnt match confirm password
  } else if (customPWInput.validity.patternMismatch){
    customPWInput.setCustomValidity('Passwords have to meet the requirements');
  } else{
    customPWInput.setCustomValidity('');
  }
  customPWError.textContent =customPWInput.validationMessage;
});
console.log(customPWInput);
//event listener for  confirm password

confirmPWInput.addEventListener('input', function (){

  //enter password
  if (confirmPWInput.validity.valueMissing){
    confirmPWInput.setCustomValidity('Please confirm your password.');
  
  //too short error message
  }else if (confirmPWInput.validity.tooShort){
    confirmPWInput.setCustomValidity('This password is too short');

  //doesnt match confirm password
  } else if (confirmPWInput.value !== customPWInput.value){
    confirmPWInput.setCustomValidity('Passwords do not match.');
  } else{
    confirmPWInput.setCustomValidity('');
  }
  confirmPWError.textContent =confirmPWInput.validationMessage;
});



//on submit event listener add event.preventDefault()

//Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field: I added autocomplete in html not sure if that is the same thing
// Check validity using the Constraint Validation API (inputElement.validity).

//Apply the JavaScript Constraint Validation API to check validity and display custom error messages.



// keep form submission optional just like your comment
// customForm.addEventListener('submit', function (event) {
//   if (!customForm.checkValidity()) {
//     event.preventDefault();
//   }
// });
