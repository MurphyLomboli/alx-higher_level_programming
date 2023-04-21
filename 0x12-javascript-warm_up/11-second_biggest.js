#!/usr/bin/node

//  Write a script that searches the second biggest integer in the list of arguments.

const args = process.argv.slice(2);
if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  const sort = args.map((ele) => Number(ele)).sort((a, b) => (b - a));
  console.log(sort[1]);
}
