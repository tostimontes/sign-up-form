const inputBoxes = document.querySelectorAll("input");
const submitButton = document.querySelector("submit_button");
const eyeIcon = document.querySelectorAll(".eye_icon");

eyeIcon.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.previousElementSibling.type = "text";
  });
  icon.addEventListener("mouseleave", function () {
    this.previousElementSibling.type = "password";
  });
});

inputBoxes.forEach((input) => {
  input.addEventListener("input", function () {
    this.classList.add("interacted");
    if (this.id === "confirm_password") {
      if (this.value === document.querySelector("#password").value) {
        this.style.border = "0.15rem solid var(--input-success-border)";
        document.querySelector(".mismatched_passwords").style.display = "none";
      } else {
        this.style.border = "0.15rem solid var(--input-error-border)";
        document.querySelector(".mismatched_passwords").style.display = "block";
      }
    }
    this.checkValidity();
    if (!this.checkValidity()) {
      if (this.id === "password") {
        this.parentElement.nextElementSibling.style.display = "block";
        return;
      }
      this.nextElementSibling.style.display = "block";
    } else {
      if (this.id === "password") {
        this.parentElement.nextElementSibling.style.display = "none";
        return;
      }
      this.nextElementSibling.style.display = "none";
    }
  });
});

// spanishPhoneNumber = /^(?:(?:\+|\b00)\d{2})?\s*(?:\d\s*){9}$/
// passwordPattern = /^(?=.*[A-Z])(?=.*d)[A-Za-zd]{8,12}$/;