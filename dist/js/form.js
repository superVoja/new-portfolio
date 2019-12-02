//Form
function formFocus() {
  const input = document.querySelectorAll(".input");

  input.forEach(input => {
    input.addEventListener("blur", () => {
      if (input && input.value != 0) {
        input.classList.add("has-val");
      } else {
        input.classList.remove("has-val");
      }
    });
  });
}

formFocus();

function formValidate() {
  "use strict";
  var name = document.querySelector('.validate-input input[name="name"]');
  var email = document.getElementById("input-email");
  var message = document.querySelector(
    '.validate-input textarea[name="message"]'
  );

  document.getElementById("input-form").addEventListener("submit", () => {
    var check = true;

    if (name.value == "") {
      showValidate(name);
      check = false;
    }
    if (email.value == "") {
      showValidate(email);
      check = false;
    }
    var testData = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!testData.test(email.value)) {
      showValidate(email);
      check = false;
    }
    if (message.value == "") {
      showValidate(message);
      check = false;
    }
    if (check == false) {
      event.preventDefault();
    }

    return check;
  });

  const input = document.querySelectorAll(".validate-form .input");
  input.forEach(input => {
    input.addEventListener("blur", () => {
      hideValidate(input);
    });
  });

  function showValidate(input) {
    var thisAlert = input.parentElement;

    thisAlert.classList.add("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = input.parentElement;

    thisAlert.classList.remove("alert-validate");
  }
}

formValidate();
