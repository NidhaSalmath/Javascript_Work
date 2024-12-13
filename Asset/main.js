
// 1st qsn
function repeate() {
  let text = document.getElementById("count-text").value;
  let n = parseFloat(document.getElementById("count").value);
  // document.write(text);
  // document.write(n);
  for (let i = 0; i < n; i++) {

    reap.innerHTML += `${text} `;
  }
};

// 2nd qsn
function concatString() {
  let fststring = document.getElementById("fst-string").value;
  let sec = document.getElementById("sec-string").value;
  let result = fststring.concat(sec);
  stringconcat.innerHTML = `${result}`;
};

//   3rd qstn
function searchWord() {
  const paragraph = document.getElementById('paragraph').value.toLowerCase();
  const word = document.getElementById('word').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  if (!paragraph || !word) {
    resultDiv.textContent = "Please enter both a paragraph and a word to search.";
    resultDiv.style.color = "red";
    return;
  }

  // Create a regular expression to search for the word
  const regex = new RegExp('\\b' + word + '\\b', 'i'); // 'i' for case-insensitive

  // Check if the word exists in the paragraph
  if (regex.test(paragraph)) {
    resultDiv.textContent = `The word "${word}" is present in the paragraph.`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `The word "${word}" is NOT present in the paragraph.`;
    resultDiv.style.color = "red";
  }
}

// loops 
//  14 --- given number is palindrome or not.
function checkPalindromee() {
  let num = document.getElementById('palindromeInput').value;
  let reversed = 0;
  let original = num;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (reversed == original) {
    document.getElementById('palindromeResult').innerText = `${original} is a palindrome.`;
  } else {
    document.getElementById('palindromeResult').innerText = `${original} is not a palindrome.`;
  }
}
//  15 --- given number is prime or not.
function checkPrime() {
  let num = parseInt(document.getElementById('primeInput').value);
  if (num <= 1) {
    document.getElementById('primeResult').innerText = `${num} is not a prime number.`;
    return;
  }
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      document.getElementById('primeResult').innerText = `${num} is not a prime number.`;
      return;
    }
  }
  document.getElementById('primeResult').innerText = `${num} is a prime number.`;
}
// 16 --- reverse a number
function reverseNumber() {
  let num = parseInt(document.getElementById('reverseInput').value);
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  document.getElementById('reverseResult').innerText = `Reversed number is: ${reversed}`;
}
// 17 --- numbers into words.
function convertToWords() {
  const numbers = document.getElementById("numbers").value.split(",");
  const outputDiv = document.getElementById("outputt");
  outputDiv.innerHTML = ""; // Clear previous output

  if (numbers.length === 0 || numbers.some(num => isNaN(num.trim()) || num.trim() === "")) {
    outputDiv.innerHTML = "<p>Please enter valid numbers separated by commas.</p>";
    return;
  }

  let output = "<ul>";
  numbers.forEach(num => {
    const number = parseInt(num.trim());
    output += `<li>${number}: ${numberToWords(number)}</li>`;
  });
  output += "</ul>";
  outputDiv.innerHTML = output;
}

function numberToWords(num) {
  if (num < 0) {
    return "minus " + numberToWords(-num);
  }

  if (num === 0) return "zero";

  let result = "";
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["", "thousand"];

  function convertUnderThousand(n) {
    let str = "";

    if (n >= 100) {
      str += ones[Math.floor(n / 100)] + " hundred";
      n %= 100;
      if (n > 0) str += " and ";
    }

    if (n >= 20) {
      str += tens[Math.floor(n / 10)];
      n %= 10;
      if (n > 0) str += "-" + ones[n];
    } else if (n >= 10) {
      str += teens[n - 10];
    } else if (n > 0) {
      str += ones[n];
    }

    return str.trim();
  }

  let place = 0;

  while (num > 0) {
    const chunk = num % 1000;

    if (chunk > 0) {
      let chunkWords = convertUnderThousand(chunk);
      if (place > 0) chunkWords += " " + thousands[place];
      result = chunkWords + (result ? " " + result : "");
    }

    num = Math.floor(num / 1000);
    place++;
  }

  return result.trim();
}

// 18 --- Reverse a string
function reverseString() {
  const input = document.getElementById('inputString').value;
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
 document.getElementById('output').textContent = reversed;
}
// 19 ----- Fibonacci series
function generateFibonacci() {
  let count = parseInt(document.getElementById('fibCount').value);
  if (isNaN(count) || count <= 0) {
    document.getElementById('fibResult').innerText = "Please enter a valid positive number.";
    return;
  }

  let fib = [0, 1];
  for (let i = 2; i < count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  document.getElementById('fibResult').innerText = `Fibonacci series: ${fib.slice(0, count).join(', ')}`;
}
// 20 ---- prints Floyd's triangle.. -->
function generateTriangle() {
  const rows = parseInt(document.getElementById("rows").value);
  const triangleDiv = document.getElementById("triangle");
  triangleDiv.innerHTML = ""; // Clear previous triangle

  if (!rows || rows <= 0) {
    triangleDiv.innerHTML = "<p>Please enter a valid number of rows.</p>";
    return;
  }

  let number = 1; // Start from 1
  let output = "";

  // Calculate the maximum width for consistent spacing
  const maxNumber = (rows * (rows + 1)) / 2; // Largest number in the triangle
  const numberWidth = String(maxNumber).length + 1; // Calculate the width of the largest number

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      // Add numbers with padding for alignment
      output += String(number).padStart(numberWidth, " ");
      number++;
    }
    output += "\n"; // New line for the next row
  }

  triangleDiv.textContent = output; // Use textContent to preserve spaces
}

// 21 -----factorial of a given number.
function calculateFactorial() {
  let num = parseInt(document.getElementById('factorialInput').value);
  if (isNaN(num) || num < 0) {
    document.getElementById('factorialResult').innerText = "Please enter a non-negative number.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  document.getElementById('factorialResult').innerText = `Factorial of ${num} is: ${factorial}`;
}

// 22 ------ prime numbers upto a given limt.
function printPrimes() {
  let limit = parseInt(document.getElementById('primeLimit').value);
  if (isNaN(limit) || limit < 2) {
    document.getElementById('primeNumbersResult').innerText = "Please enter a valid limit greater than 1.";
    return;
  }

  let primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  document.getElementById('primeNumbersResult').innerText = `Prime numbers up to ${limit}: ${primes.join(', ')}`;
}


// 23 ---- Multiplication table of a given number
function generateMultiplicationTable() {
  let num = parseInt(document.getElementById('tableNumber').value);
  if (isNaN(num)) {
    document.getElementById('multiplicationTableResult').innerText = "Please enter a valid number.";
    return;
  }

  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}\n`;
  }

  document.getElementById('multiplicationTableResult').innerText = table;
}

// 24 ----- Sum of 10 numbers.
function sumNumbers() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    let num = parseInt(document.getElementById(`num${i}`).value);
    if (isNaN(num)) {
      document.getElementById('sumResult').innerText = "Please enter valid numbers for all inputs.";
      return;
    }
    sum += num;
  }
  document.getElementById('sumResult').innerText = `Sum of the numbers: ${sum}`;
}
// second one
function calculateSum() {
  const input = document.getElementById("numbersInput").value.trim();
  const outputDiv = document.getElementById("sumoften");

  // Split the input string into an array of values
  const numberStrings = input.split(" ");
  
  // Validate that exactly 10 numbers are entered
  if (numberStrings.length !== 10) {
    outputDiv.innerText = "Please enter exactly 10 numbers separated by spaces.";
    return;
  }

  let sum = 0;
  let valid = true;

  // Loop through the input values
  for (let i = 0; i < numberStrings.length; i++) {
    const number = parseFloat(numberStrings[i]);

    // Check if the input is a valid number
    if (isNaN(number)) {
      valid = false;
      break;
    }

    // Add the valid number to the sum
    sum += number;
  }

  // Display the result or error
  if (valid) {
    outputDiv.innerText = `The sum of the numbers is: ${sum}`;
  } else {
    outputDiv.innerText = "Please ensure all inputs are valid numbers.";
  }
}
 

// 25 ---- Print days of week using switch.
function getDayOfWeek() {
  let day = parseInt(document.getElementById('dayInput').value);
  let dayName = "";

  switch (day) {
    case 1: dayName = "Sunday"; break;
    case 2: dayName = "Monday"; break;
    case 3: dayName = "Tuesday"; break;
    case 4: dayName = "Wednesday"; break;
    case 5: dayName = "Thursday"; break;
    case 6: dayName = "Friday"; break;
    case 7: dayName = "Saturday"; break;
    default: dayName = "Please enter a number between 1 and 7."; break;
  }

  document.getElementById('dayResult').innerText = `The day is: ${dayName}`;
}

//  26 ----- Check your string is palindome or not.
function checkPalindrome() {
  // Get the input string
  const str = document.getElementById('inputString').value.toLowerCase();
  let isPalindrome = true;

  // Use a loop to check palindrome
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  // Display the result
  const resultDiv = document.getElementById('palresult');
  if (isPalindrome) {
    resultDiv.textContent = `"${str}" is a Palindrome!`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `"${str}" is NOT a Palindrome.`;
    resultDiv.style.color = "red";
  }
}

