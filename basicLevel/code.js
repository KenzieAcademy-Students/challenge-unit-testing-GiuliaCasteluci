// Your code here
//Write a function named reverseString that takes a string as a parameter and returns the string with the characters reversed (ex: reverseString("Kenzie Academy") will return "ymedacA eizneK"). If the parameter is anything other than a string, return null.
function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("Kenzie Academy");

//   or with a for loop

function reverseString2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString2("hello world");

//or using split reverse and join method

function reverseString3(str) {
  return str.split("").reverse().join("");
}
reverseString3("Giulia Casteluci");

//Write a function named reverseSentence that takes a string as a parameter and returns the words in a sentence reversed but not the letters (ex: reverseSentence("Kenzie Academy is awesome") will return "awesome is Academy Kenzie"). If the parameter is anything other than a string, return null.
let reverseSentence = (str) =>
  str
    .split(" ")
    .filter((word) => word.length > 0)
    .reverse()
    .join(" ");

reverseSentence("giulia stefanelli casteluci");

//Write a function named minimumNumber that takes an array of numbers as a parameter and returns the minimum value in an array (ex: minimumNumber([123, 99, 333, 2, 77, 1111]) will return 2). If the parameter is anything other than an array, return null; as long as the function receives an array, assume all its elements are numbers.
// minimumNumber[123, 99, 333, 2, 77, 1111] will return 2
function minimumNumber() {
  let smallest = [123, 99, 333, 2, 77, 1111];
  return smallest.reduce((a, b) => {
    return Math.min(a, b);
  });
}
minimumNumber();

//same but maximumNumber
function maximumNumber() {
  let largest = [123, 99, 333, 2, 77, 1111];
  return largest.reduce((a, b) => {
    return Math.max(a, b);
  });
}
maximumNumber();

//calculateRemainder that takes two numbers as parameters and returns the remainder from dividing the first parameter from the second (ex: calculateRemainder(17, 3) will return 2)
function calculateRemainder(g, p) {
  return g % p;
}
console.log(calculateRemainder(17,3));


//distinctNumbers that takes an array of numbers (including duplicates) as a parameter and returns the distinct values as a comma-separated string (ex: distinctNumbers([1, 3, 5, 3, 7, 3, 1, 1, 5]) will return "1, 3, 5, 7").
function distinctNumbers(arr) {
  arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];
  const str = arr.join(", ");
  return arr;
}
console.log(distinctNumbers());

// countValues that takes an array of numbers as a parameter and returns the distinct values and their counts as a comma-separated string (ex: countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]) will return "1(3), 3(3), 5(2), 7(1)"). If the parameter is anything other than an array, return null; as long as the function receives an array, assume all its elements are numbers.

arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];

function countValues(arr) {
  arr = arr.sort();
  let num = arr[0];
  let result = {};
  let count = 0;

  arr.forEach((n) => {
    result[n] = (result[n] || 0) + 1
  });
  let keys = Object.keys(result)
  let str = " "
  keys.forEach((k) => {
    str += `${k}(${result[k]}), ` 
  })
  return str;
}
console.log(countValues(arr));


//evaluateExpression that takes a string of basic arithmetic expressions (only variables, +, and -) and an object describing a set of variable/value pairs as parameters and returns the result of the expression (ex: evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) will return -3). If the parameters are anything other than a string and an object, return null; as long as the function receives an object, assume all its keys are numbers.
function evaluateExpression(){
  //code
}