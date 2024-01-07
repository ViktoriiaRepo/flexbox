"use strict";

function changeFlexDirection(value) {
  const container = document.querySelector(".container");
  container.style.flexDirection = value;
  const buttons = document.querySelectorAll(".flex-direction");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
}
