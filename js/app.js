let form = document.querySelector("#form");

// let day = document.querySelector("#day");
// let month = document.querySelector("#month");
// let year = document.querySelector("#year");
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let messages = document.querySelectorAll(".app__date span");

// getting error
function getError(e) {
  // prevent submit button default behaviour
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value == "") {
      input.classList.add("invalid");
      labels.forEach((label) => {
        label.classList.add("invalid");
      });
      messages.forEach((message) => {
        message.classList.add("show");
      });
    }
  });

  e.target.reset()
}

form.addEventListener("submit", getError);

// getting error of inputs

let now = new Date();
let currentYear = now.getFullYear();

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.currentTarget.name == "year") {
      if (Number(e.target.value) > currentYear) {
        messages.forEach((message) => {
          if (message.previousElementSibling.name == "year") {
            message.classList.add("show");
            message.textContent = "must be in the past";
            if (e.target.value == "") {
              message.classList.add("hide");
              message.classList.remove("show");
            }
          }
        });
      }
    }

  });
});


/**
 * 
 * year input if it is empty, invalid message should be hidden
 * text regEx
 * day and month validation
 * 
 * should focus on display section
 */