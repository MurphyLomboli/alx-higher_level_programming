#!/usr/bin/node

/**
 * A script that prints a square
 * The first argument is the size of the square
 * If the first argument can’t be converted to an integer, print “Missing size”
 * You must use the character X to print the square
 */

const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  let i;
  for (i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
