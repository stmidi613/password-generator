const AlphaNum =
  "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890";
const AlphaNumSpecChar =
  "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890$!@%#^:+?*";
const SpecChar = "$!@%#^:+?*";
const numOnly = "0123456789";

var numOfChar = Number(document.getElementById("pwSize").value);
var arr = [...Array(numOfChar).keys()];

function updateNumOfChar() {
  if (numOfChar < 27 && numOfChar > 0 && typeof numOfChar === "number") {
    numOfChar = Number(document.getElementById("pwSize").value);
    arr = [...Array(numOfChar).keys()];
    return arr;
  } else {
    numOfChar = 0;
    arr = [...Array(numOfChar).keys()];
    document.getElementById("rangeError").style.display = "block";
  }
}

function resetFunction() {
  numOfChar = 12;
  document.getElementById("pwSize").value = 12;
  document.getElementById("rangeError").style.display = "none";
}

function generateNum() {
  updateNumOfChar();
  document.getElementById("numPassword").value = arr
    .map((num) => (num = numOnly[Math.floor(Math.random() * 10)]))
    .join("");
}

function generateAlphaNum() {
  updateNumOfChar();
  document.getElementById("password").value = arr
    .map((num) => (num = AlphaNum[Math.floor(Math.random() * 62)]))
    .join("");
}

//This function just insures at least one number is in the Special Characters Password
function insertNum(string) {
  return string.match(/\d/) == null &&
  string.length > 2
  ? string.replace(string[string.length - 2], numOnly[Math.floor(Math.random() * 10)]) : string;
}

function generateSpecChar() {
  updateNumOfChar();

  let string = arr
  .map((num, index) => 
  index + 1 === arr.length
  ? (num = SpecChar[Math.floor(Math.random() * 10)])
  : index !== 0
  ? (num = AlphaNumSpecChar[Math.floor(Math.random() * 72)])
  : (num = AlphaNum[Math.floor(Math.random() * 52)])
  )
  .join("");
  
  insertNum(string)
  
  document.getElementById("specCharPassword").value = string;
}
