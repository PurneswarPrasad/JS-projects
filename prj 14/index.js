var nameErr = document.getElementById("name-error");
var phoneErr = document.getElementById("phone-error");
var emailErr = document.getElementById("email-error");
var messageErr = document.getElementById("message-error");
var submitErr = document.getElementById("submit-error");
var submitBtn = document.getElementById("submit-btn");

// Variables to track if each field is valid
let isNameValid = false;
let isPhoneValid = false;
let isEmailValid = false;
let isMessageValid = false;

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameErr.innerHTML = "Name is required";
    isNameValid = false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerHTML = "Write full name";
    isNameValid = false;
  } else {
    nameErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    isNameValid = true;
  }

  enableSubmitButton();
  return isNameValid;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length === 0 || phone.length !== 10) {
    phoneErr.innerHTML = "Enter a valid 10 digit phone number";
    isPhoneValid = false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneErr.innerHTML = "Invalid phone number";
    isPhoneValid = false;
  } else {
    phoneErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    isPhoneValid = true;
  }

  enableSubmitButton();
  return isPhoneValid;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailErr.innerHTML = "Email is required";
    isEmailValid = false;
  } else if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    emailErr.innerHTML = "Invalid email";
    isEmailValid = false;
  } else {
    emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    isEmailValid = true;
  }

  enableSubmitButton();
  return isEmailValid;
}

function validateMessage() {
  var msg = document.getElementById("contact-message").value;
  var len = msg.length;

  if (msg.length === 0) {
    messageErr.innerHTML = "Message is required";
    isMessageValid = false;
  } else if (len > 0 && len !== 30 && 30 - len > 0) {
    messageErr.innerHTML = `${30 - len} more characters required`;
    isMessageValid = false;
  } else {
    messageErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    isMessageValid = true;
  }

  enableSubmitButton();
  return isMessageValid;
}

function enableSubmitButton() {
  // Enable the button only if all fields are valid
  if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function validateForm() {
  if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
    return true;
  } else {
    submitErr.style.display = "block";
    submitErr.innerHTML = "Please fix errors";
    setTimeout(function () {
      submitErr.style.display = "none";
    }, 3000);
    return false;
  }
}
