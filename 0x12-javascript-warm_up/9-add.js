#!/usr/bin/node

//  Write a script that prints the addition of 2 integers

function add (a, b) {
  return a + b;
}

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

if (arg1 && arg2) {
  const result = add(arg1, arg2);
  console.log(result);
} else if (isNaN) {
  console.log('NaN');
}
