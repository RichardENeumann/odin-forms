"use strict";

let pwInput = document.getElementById("pw");
let pwInputConfirm = document.getElementById("pwConfirm");
let pwError = document.getElementById("errorMessage");

console.log(pwInput, pwInputConfirm,pwError);

function checkCongruency() {
    if (pwInput.value != "" && pwInput.value == pwInputConfirm.value) {
        pwError.innerHTML = "Ok!";
        pwError.style.color = "lightgreen";
    } else {
        pwError.innerHTML = "...not matching!";
        pwError.style.color = "red";
    }
}

pwInput.addEventListener("input", checkCongruency());
pwInputConfirm.addEventListener("input", checkCongruency());