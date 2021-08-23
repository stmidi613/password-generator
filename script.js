const AlphaNum = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890";
const AlphaNumSpecChar = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890$!@&+?*/";

var numOfChar = 12;

var arr = [...Array(numOfChar).keys()];

function generateAlphaNum(){
    //document.getElementById("password") =
    return arr.map(num => num = AlphaNum[Math.floor(Math.random() * 61)]).join("");
}

function generateSpecChar(){
    return arr.map((num, index) => index !== 0 ?
    num = AlphaNumSpecChar[Math.floor(Math.random() * 69)] :
    num = AlphaNum[Math.floor(Math.random() * 61)]).join("");
}

console.log(generateAlphaNum())
console.log(generateSpecChar())
console.log(document)
