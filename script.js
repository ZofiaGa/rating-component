"use strict";

const submitPage = document.querySelector(".submit-page");
const numberToSelect = document.querySelectorAll(".number");
const submitBtn = document.querySelector(".submit-btn");
const thankYouPage = document.querySelector(".thank-you-page");
const selectedNum = document.querySelector(".selected-num");

for (let i = 0; i < numberToSelect.length; i++) {

  numberToSelect[i].addEventListener("click",  () => {
    selectedNum.textContent =
      "You selected " + numberToSelect[i].textContent + " out of 5";

    for (let k = 0; k < numberToSelect.length; k++) {
      if (numberToSelect[k].style.backgroundColor !== "#262e38") {
        numberToSelect[k].style.backgroundColor = "#262e38"; // dark blue
        numberToSelect[k].style.color = "#969fad";
      }
    }
    numberToSelect[i].style.backgroundColor = "#969fad"; // medium grey
    numberToSelect[i].style.color = "#ffffff";

  });
}

submitBtn.addEventListener("click",  () => {
  if (selectedNum.textContent.trim() === "Nothing selected") {
    alert("You didn't select a rating. \nPlease select one. \nThank you!");
  } else {
    submitPage.classList.add("hidden");
    thankYouPage.classList.remove("hidden");
  }
});
