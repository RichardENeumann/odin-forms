"use strict";

let pwInput = document.getElementById("pw");
let pwInputConfirm = document.getElementById("pwConfirm");
let pwError = document.getElementById("errorMessage");

function checkCongruency() {
    console.log(pwInput.value, pwInputConfirm.value);

    if (pwInput != "" && pwInput.value == pwInputConfirm.value) {
        pwError.innerHTML = "Ok!";
        pwError.style.color = "green";
    } else {
        pwError.innerHTML = "...not matching!";
        pwError.style.color = "red";
    }
}

pwInput.addEventListener("input", checkCongruency);
pwInputConfirm.addEventListener("input", checkCongruency);