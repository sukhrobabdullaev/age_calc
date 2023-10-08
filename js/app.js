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
      messages.forEach(message => {
        message.classList.add('show')
      })
    }
  });
}

form.addEventListener("submit", getError);
