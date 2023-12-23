const form = document.querySelector("form");
const container = document.getElementById("container");
const subContainer = document.getElementById("sub-container");

const secondary = document.getElementById("sub-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("email-input");
  const error = document.getElementById("labelError");

  if (input.value === "" || validateEmail(input.value) === true) {
    showError();
  } else {
    hideError();
    showCard();
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  function showError() {
    error.classList.remove("hidden");
    input.classList.add("invalid");
  }

  function hideError() {
    error.classList.add("hidden");
    input.classList.remove("invalid");
  }

  function showCard() {
    container.classList.add("hidden");
    subContainer.classList.remove("hidden");
  }
});

secondary.addEventListener("click", (e) => {
  e.preventDefault();
  const dismiss = document.getElementById("sub-container");
  showPrimary();

  function showPrimary() {
    dismiss.classList.add("hidden");
    container.classList.remove("hidden");
  }
});
