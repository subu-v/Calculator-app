"use strict";

const toggleSwitch = document.getElementsByClassName("calc__tswitch--input");
const inputBtns = [...toggleSwitch];

inputBtns.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    console.log("btn clicked");
    ele.style.opacity = "1";
    inputBtns
      .filter((item) => item != ele)
      .forEach((e) => (e.style.opacity = "0"));
    if (ele.id === "one") {
      document.body.classList.remove("theme-2");
      document.body.classList.remove("theme-2");
    } else if (ele.id === "two") {
      document.body.classList.add("theme-2");
      document.body.classList.remove("theme-3");

    } else if (ele.id === "three") {
      document.body.classList.add("theme-3");
      document.body.classList.remove("theme-2");
    }
  });
});
