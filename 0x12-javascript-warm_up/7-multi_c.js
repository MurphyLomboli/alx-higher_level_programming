#!/usr/bin/node

/** Write a script that prints x times “C is fun”
* Where x is the first argument of the script
* If the first argument can’t be converted to an integer, print “Missing number of occurrences”
*/

const y = parseInt(process.argv[2]);
if (isNaN(y)) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < y; i++) {
  console.log('C is fun');
}
