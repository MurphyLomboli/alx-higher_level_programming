#!/usr/bin/node
// Script that prints all characters of a Star Wars movie

const request = require('request');
const movieId = process.argv[2]; // Get the movie ID from the first argument
const url = 'https://swapi-api.hbtn.io/api/films/' + movieId; // Construct the API url

request(url, function (error, response, body) { // Make a request to the API
  if (error) { // Handle error
    console.error(error);
  } else { // Handle success
    const film = JSON.parse(body); // Parse the response body as JSON
    const characters = film.characters; // Get the list of characters
    printCharacters(characters, 0); // Call a recursive function to print the characters
  }
});

function printCharacters (characters, index) { // Define a recursive function
  if (index >= characters.length) { // Base case: if there are no more characters to print, return
    return;
  }
  const character = characters[index]; // Get the current character url
  request(character, function (error, response, body) { // Make another request to get the character name
    if (error) { // Handle error
      console.error(error);
    } else { // Handle success
      const person = JSON.parse(body); // Parse the response body as JSON
      console.log(person.name); // Print the character name
      printCharacters(characters, index + 1); // Call the function again with the next index
    }
  });
}
