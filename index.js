function validateForm(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else event.returnValue = false;
}

(function () {
  var contactForm = document.getElementById("contact-form");
  var elements = contactForm.elements;

  let name = elements.client_name;
  let email = elements.client_email;
  let phone = elements.client_phone;
  let callUs = elements.call_us;
  let emailUs = elements.email_us;

  let name_error_message = document.getElementById("client-error");
  let email_error_message = document.getElementById("email-error");
  let phone_error_message = document.getElementById("phone-error");
  let callUsError = document.getElementById("call_us_error");
  let emailUsError = document.getElementById("email_us_error");

  let submitButton = document.getElementById("submit-contact-form");

  //event handler for call-us checkbox button
  callUs.addEventListener("change", function () {
    displayCheckboxMessage(callUs, callUsError);
  });
  //event handler for email-us checkbox button
  emailUs.addEventListener("change", function () {
    displayCheckboxMessage(emailUs, emailUsError);
  });

  //event handler for name email and phone number
  name.addEventListener("blur", validateName);
  email.addEventListener("blur", validateEmail);
  phone.addEventListener("blur", validatePhone);

  //event handler for submit button
  submitButton.addEventListener("click", function () {
    validateName();
    validateEmail();
    validatePhone();
    if (
      !(
        name_error_message.innerHTML ||
        email_error_message.innerHTML ||
        phone_error_message.innerHTML
      )
    ) {
      var formConta = document.getElementById("form-container");
      var messageConta = document.getElementById("message");
      var greeting = document.getElementById("client-name-greeting");
      formConta.className = "hide";
      messageConta.className = "";
      greeting.innerHTML = name.value;
    }
  });

  function displayCheckboxMessage(element, error_window) {
    console.log(element);
    if (element.checked) {
      error_window.innerHTML =
        "Please confirm the entered email number before submitting the form.";
    } else error_window.innerHTML = "";
  }

  function validateName() {
    if (name.value.length <= 5) {
      name_error_message.innerHTML =
        name.value.length == 0
          ? "Name is required"
          : " Name should be atleast 5 characters long.";
    } else {
      name_error_message.innerHTML = "";
    }
  }

  function validateEmail() {
    if (email.value.length == 0) {
      email_error_message.innerHTML = "email is required";
    } else if (/^\S+@\S+\.\S+$/.test(email.value) === false) {
      email_error_message.innerHTML = "enter a valid email address";
    } else {
      email_error_message.innerHTML = "";
    }
  }

  function validatePhone() {
    if (/^[1-9]\d{9}$/.test(phone.value) === false) {
      phone_error_message.innerHTML =
        phone.value.length == 0
          ? "Phone number is required"
          : "Phone number should be a valid one";
    } else {
      phone_error_message.innerHTML = "";
    }
  }
})();
