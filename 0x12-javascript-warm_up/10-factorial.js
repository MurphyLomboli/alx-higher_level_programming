#!/usr/bin/node

/**
 * A script that computes and prints a factorial
 * The first argument is integer (argument can be cast as integer) used for computing the factorial
 * Factorial of NaN is 1
 * You must do it recursively
 * You must use a function
 */

function factorial (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0 || isNaN(num)) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

const arg = parseInt(process.argv[2]);

console.log(factorial(arg));
