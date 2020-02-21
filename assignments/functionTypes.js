// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */


// Function Declaration
function addOne(n) {
  return n+1;
}

//Function Expression
let addOne = function(n) {
  return n+1;
};

//Arrow Function
let addOne = n => n+1;

// Arrow Function With Curly Bracket
let addOne = n => {
  return n+1;
};

// Function Invocation
addOne(21); // 22


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */


function subOne(n) {
  return n-1;
}

//Function Expression
let subOne = function(n) {
  return n-1;
};

//Arrow Function
let subOne = n => n-1;

// Arrow Function With Curly Bracket
let subOne = n => {
  return n-1;
};

// Function Invocation

subOne(21); // 20


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */


// Function Declaration
function add(x, y) {
  return x+y;
}

//Function Expression
let add = function(x, y) {
  return x+y;
};

//Arrow Function
let add = (x, y) => x+y;

// Arrow Function With Curly Bracket
let add = (x, y) => {
  return x+y;
};

// Function Invocation

add(5, 10); // 15


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

// Function Declaration
function sub(x, y) {
  return x-y;
}

//Function Expression
let sub = function(x, y) {
  return x-y;
};

//Arrow Function
let sub = (x, y) => x-y;

// Arrow Function With Curly Bracket
let sub = (x, y) => {
  return x-y;
};

// Function Invocation

sub(15, 10); // 5

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */


// Function Declaration
function mul(x, y) {
  return x*y;
}

//Function Expression
let mul = function(x, y) {
  return x*y;
};

//Arrow Function
let mul = (x, y) => x*y;

// Arrow Function With Curly Bracket
let mul = (x, y) => {
  return x*y;
};

// Function Invocation

mul(15, 10); // 150

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 // Function Declaration
function div(x, y) {
  return x/y;
}

//Function Expression
let div = function(x, y) {
  return x/y;
};

//Arrow Function
let div = (x, y) => x/y;

// Arrow Function With Curly Bracket
let div = (x, y) => {
  return x/y;
};

// Function Invocation

div(20, 10); // 2

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */


// Function Declaration
function square(x) {
  return x**2;
}

//Function Expression
let square = function(x) {
  return x**2;
};

//Arrow Function
let square = (x) => x**2;

// Arrow Function With Curly Bracket
let square = (x) => {
  return x**2;
};

// Function Invocation

square(2); // 4


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculator(operation, x, y) {
  if(operation == "add"){
    var n = x+y;
    alert(` ${x} + ${y} = ${n} `);
  }
  else if(operation == "subtract") {
    var n = x-y;
    alert(` ${x} - ${y} = ${n} `);
  }


  else if(operation == "multiply") {
    var n = x*y;
    alert(` ${x} * ${y} = ${n} `);
  }


  else if(operation == "divide") {
    var n = x/y;
    alert(` ${x} / ${y} = ${n} `);
  }
  else {
    alert("Wrong operation")
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */


// Function Declaration
function greater(a, b) {
  if(a > b)
    return a;
  return b;
}

//Function Expression
let greater = function(a, b) {
  if(a > b)
    return a;
  return b;
};

//Arrow Function
let greater = (a, b) => a>b ? a:b;

// Arrow Function With Curly Bracket
let greater = (a, b) => {
  if(a > b);
    return a;
  return b;
};

// Function Invocation

greater(5, 6); // 6

 
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */


// Function Declaration
function lessThan(a, b) {
  if(a < b)
    return a;
  return b;
}

//Function Expression

let lessThan = function(a, b) {
  if(a < b)
    return a;
  return b;
};
//Arrow Function

let lessThan = (a, b) => a<b ? a:b;

// Arrow Function With Curly Bracket

let lessThan = (a, b) => {
  if(a < b)
    return a;
  return b;
};
// Function Invocation

greater(9, 6); // 6

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */


function equal(a, b) {
  if(a == b)
    return true;
  return false;
}

//Function Expression
let equal = function(a, b) {
  if(a == b)
    return true;
  return false;
};

//Arrow Function

let equal = (a,b) => (a == b) ? true:false;


// Arrow Function With Curly Bracket

let equal = (a, b) => {
  if(a ==b)
    return true;
  return false;
}

// Function Invocation
equal(4, 4)
true

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */


// Function Declaration

function smaller(a, b) {
  if(a < b)
    return a;
  return b;
}
//Function Expression

let smaller = function(a, b) {
  if(a < b)
    return a;
  return b;
};
//Arrow Function

let smaller = (a,b) => (a < b) ? a:b;

// Arrow Function With Curly Bracket

let smaller = (a, b) => {
  if(a < b)
    return a;
  return b;
};

// Function Invocation
smaller(4, 7)
4

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */


function largest(x, y) {
  if(x > y)
    return x;
  return y;
}

//Function Expression

let largest = function(x, y) {
  if(x > y)
    return x;
  return y;
};

//Arrow Function

let largest = (x, y) => x > y ? x:y;
// Arrow Function With Curly Bracket

let largest = (x, y) => {
  if(x > y)
    return  x;
  return y;
};

// Function Invocation
largest(5, 10)
10

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


// Function Declaration
function even(n) {
  if(n%2 == 0)
    return true;
  return false;
}

//Function Expression

let even = function(n) {
  if(n%2 == 0)
    return true;
  return false;
};

//Arrow Function

let even = n => (n%2 == 0) ? true:false;
// Arrow Function With Curly Bracket

let even = n => {
  if(n%2 == 0)
    return true;
  return false;
};

// Function Invocation
even(6)
true

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


// Function Declaration
function odd(n) {
  if(n%2 != 0)
    return true;
  return false;
}

//Function Expression

let odd = function(n) {
  if(n%2 != 0)
    return true;
  return false;
};

//Arrow Function

let odd = n => (n%2 != 0) ? true:false;
// Arrow Function With Curly Bracket

let odd = n => {
  if(n%2 != 0)
    return true;
  return false;
};

// Function Invocation
odd(7)
true

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


// Function Declaration

function percentageMarks(score, maxm) {
  var per = +((score/maxm)*100);
  switch(true) {
    case(per >= 90):
    alert("A");
    break;
    case(per >= 80):
    alert("B");
    break;
    case(per >= 70):
    alert("C");
    break;
    case(per >= 60):
    alert("D");
    break;
    case(per < 60):
    alert("F");
    break;
  }
}

//Function Expression

let percentageMarks = function(score, maxm) {
  var per = +((score/maxm)*100);
  switch(true) {
    case(per >= 90):
    alert("A");
    break;
    case(per >= 80):
    alert("B");
    break;
    case(per >= 70):
    alert("C");
    break;
    case(per >= 60):
    alert("D");
    break;
    case(per < 60):
    alert("F");
    break;
  }
};
percentageMarks(90, 100)
//Arrow Function

//NA

// Arrow Function With Curly Bracket

let percentageMarks = (score, maxm) => {
  var per = +((score/maxm)*100);
  switch(true) {
    case(per >= 90):
    alert("A");
    break;
    case(per >= 80):
    alert("B");
    break;
    case(per >= 70):
    alert("C");
    break;
    case(per >= 60):
    alert("D");
    break;
    case(per < 60):
    alert("F");
    break;
  }
}
percentageMarks(90, 100)

// Function Invocation
percentageMarks(90, 100)
A


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

// Function Declaration

function stringJoin(word1, word2) {
  return (word1 + " " + word2);
}

//Function Expression

let stringJoin = function(word1, word2) {
  return (word1 + " " + word2);
};

//Arrow Function

let stringJoin = (word1, word2) => (word1 + " " + word2); ;

// Arrow Function With Curly Bracket

let stringJoin = (word1, word2) => {
  return (word1 + " " + word2);
};

// Function Invocation
stringJoin("abc", "def")
"abc def"
