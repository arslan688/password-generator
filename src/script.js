let showPwd = document.getElementById("show-pwd");

let range = document.getElementById("range");

const rangeNumber = document.getElementById("range-number");

let lowerCase = document.getElementById("lowercase");

let upperCase = document.getElementById("uppercase");

let numbers = document.getElementById("numbers");

let symbols = document.getElementById("symbols");

let pwdGenerateBtn = document.getElementById("generate-pwd");

let errorMsg = document.getElementById("error"); //to store Error

let resultPwd = ""; //to store final generated password

// Const Varibales for Password Generator

const lowerCaseCharactersTray = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharactersTray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersCharactersTray = "0123456789";
const symbolsCharactersTray = "@#$%^&*()";

let finalCharactersTray; // to store final Tray after checkboxes functionality
// Logic to Create Password

// Function to show range value in number

rangeNumber.textContent = range.value;

range.addEventListener("input", (e) => {
  rangeNumber.textContent = e.target.value;
});

//Password Generate Button Event to Get Random Password
pwdGenerateBtn.addEventListener("click", () => {
  finalCharactersTray = ""; //Empty Tray so that before every click previous value deleted
  resultPwd = ""; //Empty password String so that before every click previous value deleted
  errorMsg.textContent = "";

  //console.log("Button is Clicked"); // Testing Purpose

  //Checkboxes Logic Before Every Click
  if (lowerCase.checked) {
    finalCharactersTray += lowerCaseCharactersTray;
  }
  if (upperCase.checked) finalCharactersTray += upperCaseCharactersTray;
  if (numbers.checked) finalCharactersTray += numbersCharactersTray;
  if (symbols.checked) finalCharactersTray += symbolsCharactersTray;
  if (finalCharactersTray === "") {
    errorMsg.textContent = "Please Select the type of Password you want";
    showPwd.value = "";
    return;
    x;
  }

  //   console.log(finalCharactersTray);
  const length = parseInt(range.value, 10);
  for (let i = 1; i <= length; i++) {
    resultPwd +=
      finalCharactersTray[
        Math.floor(Math.random() * finalCharactersTray.length)
      ];
  }

  showPwd.value = resultPwd;
  //console.log(resultPwd);
});

//Functionality to Copy password in Clipboard

let copyPwd = document.getElementById("copy-btn"); // to copy password to clipboard

copyPwd.addEventListener("click", async () => {
  if (!showPwd.value) return;

  await navigator.clipboard.writeText(showPwd.value);

  const originalHTML = copyPwd.innerHTML;
  copyPwd.textContent = "Copied!";
  setTimeout(() => (copyPwd.innerHTML = originalHTML), 1500);
});
