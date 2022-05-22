const getRandomLowerCase = () => {
  let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return char;
};

const getRandomUpperCase = () => {
  let char = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return char;
};

const getRandomNumber = () => {
  let char = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return char;
};

const getRandomSymbol = () => {
  const symb = "@!#$%^&*_-/,.{}()[]=<>";
  return symb[Math.floor(Math.random() * symb.length)];
};

function generatePassword() {
  // const len = ?

  let password = "";

  if (lowerCase.checked) {
    password += getRandomLowerCase();
  }
  if (upperCase.checked) {
    password += getRandomLowerCase();
  }
  if (number.checked) {
    password += getRandomLowerCase();
  }
  if (symb.checked) {
    password += getRandomLowerCase();
  }

  for (let i = password.length; i < len; i++) {
    const numb = generateNumber();
    password += numb;
  }
  output.innerText = password;
}

const generateNumber = () => {
  const number = [];

  if (upperCase.checked) {
    number.push(getRandomUpperCase);
  }
  if (lowerCase.checked) {
    number.push(getRandomLowerCase);
  }
  if (number.checked) {
    number.push(getRandomNumber);
  }
  if (symb.checked) {
    number.push(getRandomSymbol);
  }

  if (number.length === 0) return "";

  return number[Math.floor(Math.random() * number.length)];
};

generateOutput.addEventListener("click", generatePassword());

copyOutput.addEventListener("click", () => {
 
    /* Select the text field */
    copyOutput.select();
    copyOutput.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyOutput.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyOutput.value);
});

console.log(getRandomNumber());
