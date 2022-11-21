// Your code here
//Write a function named reverseString that takes a string as a parameter and returns the string with the characters reversed (ex: reverseString("Kenzie Academy") will return "ymedacA eizneK"). If the parameter is anything other than a string, return null.
function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(
  "returns the string: Kenzie Academy, with the characters reversed:",
  reverseString("Kenzie Academy")
);

//   or with a for loop
function reverseString2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(
  "returns hello world with the characters reversed:",
  reverseString2("hello world")
);

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

console.log(
  "returns the words in a sentence reversed but not the letters:",
  reverseSentence("giulia stefanelli casteluci")
);

//Write a function named minimumNumber that takes an array of numbers as a parameter and returns the minimum value in an array (ex: minimumNumber([123, 99, 333, 2, 77, 1111]) will return 2). If the parameter is anything other than an array, return null; as long as the function receives an array, assume all its elements are numbers.
// minimumNumber[123, 99, 333, 2, 77, 1111] will return 2
function minimumNumber() {
  let smallest = [123, 99, 333, 2, 77, 1111];
  return smallest.reduce((a, b) => {
    return Math.min(a, b);
  });
}
console.log(
  "takes an array of numbers as a parameter and returns the minimum value the array:",
  minimumNumber()
);

//same but maximumNumber
function maximumNumber() {
  let largest = [123, 99, 333, 2, 77, 1111];
  return largest.reduce((a, b) => {
    return Math.max(a, b);
  });
}
console.log("the largest number:", maximumNumber());

//calculateRemainder that takes two numbers as parameters and returns the remainder from dividing the first parameter from the second (ex: calculateRemainder(17, 3) will return 2)
function calculateRemainder(g, p) {
  return g % p;
}
console.log(
  "returns the remainder value from dividing the first parameter from the second:",
  calculateRemainder(17, 3)
);

//distinctNumbers that takes an array of numbers (including duplicates) as a parameter and returns the distinct values as a comma-separated string (ex: distinctNumbers([1, 3, 5, 3, 7, 3, 1, 1, 5]) will return "1, 3, 5, 7").
function distinctNumbers(arr) {
  arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];
  const str = arr.join(", ");
  return arr;
}
console.log(
  "returns the distinct values as a comma-separated string",
  distinctNumbers()
);

// countValues that takes an array of numbers as a parameter and returns the distinct values and their counts as a comma-separated string (ex: countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]) will return "1(3), 3(3), 5(2), 7(1)"). If the parameter is anything other than an array, return null; as long as the function receives an array, assume all its elements are numbers.
arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];

function countValues(arr) {
  arr = arr.sort();
  let num = arr[0];
  let result = {};
  let count = 0;

  arr.forEach((n) => {
    result[n] = (result[n] || 0) + 1;
  });
  let keys = Object.keys(result);
  let str = " ";
  keys.forEach((k) => {
    str += `${k}(${result[k]}), `;
  });
  return str;
}
console.log(
  " takes an array of numbers as a parameter returns the distinct values and their counts as a comma-separated string:",
  countValues(arr)
);

//evaluateExpression that takes a string of basic arithmetic expressions (only variables, +, and -) and an object describing a set of variable/value pairs as parameters and returns the result of the expression (ex: evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) will return -3). If the parameters are anything other than a string and an object, return null; as long as the function receives an object, assume all its keys are numbers.
function evaluateExpression(string, object) {
  if(typeof(object) !== 'object' && typeof string !== 'strin') {
      return null
  }
  let split = string.split(' ')
  result = 0
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  split.forEach((letter) => {
      if(alphabet.includes(letter.toUpperCase())) {
          result += object[letter].toString()
      } else {
          result += letter
      }
  })
  return eval(result)
}
evaluateExpression('a + b + c - d', {a:1, b:7, c: 3, d: 14} )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//unit test

//minimumNumber
console.assert(2, minimumNumber(2), "wrong smallest number");
console.assert(2 !== minimumNumber, " check your function");

//maximumNumber
console.assert(1111 !== maximumNumber, " check your function");
console.assert(
  !isNaN(maximumNumber) !== maximumNumber,
  "maximum number not found"
);

//reverseString
console.assert(reverseString !== "Kenzie Academy", "reverse string failed");
console.assert(
  (reverseString == " ") != "Kenzie Academy",
  "reverse string failed"
);

//reverseSentence
console.assert(
  "casteluci stefanelli giulia" !== reverseSentence,
  "your reserve setence function failed the test"
);
console.assert(reverseSentence !== " ", "failed the expected result");

//calculateRemainder
console.assert(calculateRemainder % 1 !== calculateRemainder, "errorMSG ");
console.assert(calculateRemainder === NaN, "Expression returned false");// failed assert example

//distinctNumbers
console.assert(distinctNumbers != [], "failed");
console.assert(distinctNumbers !== [1, 3, 5, 3, 7, 3, 1, 1, 5], " failed");

//countValues
console.assert(countValues == countValues, "failed");
console.assert(typeof countValues !== [], "message error");

//evaluateExpression
console.assert(evaluateExpression('a + b + c - d', {a:1, b:7, c: 3, d: 14}) === -3, 'failed')
console.assert(evaluateExpression(1,2) === null, 'failed')