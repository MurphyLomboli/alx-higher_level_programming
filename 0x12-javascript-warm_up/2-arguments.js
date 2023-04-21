#!/usr/bin/node

/*
 * a script that prints a message depending of the number of arguments passed
 * If no arguments are passed to the script, print “No argument”
 * If only one argument is passed to the script, print “Argument found”
 * Otherwise, print “Arguments found”
 */

const arg = process.argv.slice(2);

if (arg.length === 0) {
  console.log('No argument');
} else if (arg.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
