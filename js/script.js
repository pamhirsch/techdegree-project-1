/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `getRandomQuote` function generates a random number between 0 and the
 * length of the array 'quotes'. It then uses that random number as the index
 * to grab a specific quotes object.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function calls the getRandomQuote function to get a random quote.
 * It then builds and html string to be printed later. It also checks for the
 * presence of 4 additional quote properties (beyond just the quote and source.)
 * If these are present, it adds them to the html string.
***/

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;
  if ( randomQuote.hasOwnProperty('citation') ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  };
  if ( randomQuote.hasOwnProperty('year') ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  };
  if ( randomQuote.hasOwnProperty('tags') ) {
    html += `<span class="tag">${randomQuote.tags}</span>`;
  };
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
