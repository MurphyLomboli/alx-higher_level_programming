#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Failed to fetch movie:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch movie:', response.statusCode);
    return;
  }

  console.log(`${body.title}`);

  const characterUrls = body.characters;
  characterUrls.forEach((characterUrl) => {
    request(characterUrl, { json: true }, (error, response, body) => {
      if (error) {
        console.error('Failed to fetch character:', error);
        return;
      }

      if (response.statusCode !== 200) {
        console.error('Failed to fetch character:', response.statusCode);
        return;
      }

      console.log(body.name);
    });
  });
});
