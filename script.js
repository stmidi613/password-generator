const AlphaNum = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890";
const AlphaNumSpecChar = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890$!@&+?*/";
const numOnly = "0123456789";

var numOfChar = Number(document.getElementById("pwSize").value);
var arr = [...Array(numOfChar).keys()];

function updateNumOfChar(){
    if(numOfChar < 27 && numOfChar > 0 && typeof(numOfChar) === "number"){
        numOfChar = Number(document.getElementById("pwSize").value);
        arr = [...Array(numOfChar).keys()];
    }else{
        numOfChar = 0;
        arr = [...Array(numOfChar).keys()];
    }
    return arr;
}

function generateNum(){
    document.getElementById("numPassword").value = 
    arr.map(num => num = numOnly[Math.floor(Math.random() * 9)]).join("");
}

function generateAlphaNum(){
    document.getElementById("password").value = 
    arr.map(num => num = AlphaNum[Math.floor(Math.random() * 61)]).join("");
}

function generateSpecChar(){
    document.getElementById("specCharPassword").value =
    arr.map((num, index) => index !== 0 ?
    num = AlphaNumSpecChar[Math.floor(Math.random() * 69)] :
    num = AlphaNum[Math.floor(Math.random() * 61)]).join("");
}

console.log(document.getElementById("pwSize").value)