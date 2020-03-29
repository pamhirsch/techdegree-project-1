/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// array of heximdecimal colors to be used in the random color generator function

const colors = [
  '#9e4a23',
  '#237d9e',
  '#164556',
  '#3021a2',
  '#177349',
  '#969b4b',
  '#c02387',
  '#952047',
  '#865b69'
];

/***
 * `getRandomColor`function generates a random color between 0 and the
 * length of the array 'colors'. It then uses that random number as the index
 * to grab a specific color and update the background color on the browser.
***/

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
}

/***
 * `getRandomQuote` function generates a random number between 0 and the
 * length of the array 'quotes'. It then uses that random number as the index
 * to grab a specific quotes object.
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function calls the getRandomQuote function to get a random quote.
 * It then builds and html string to be printed later. It also checks for the
 * presence of 4 additional quote properties (beyond just the quote and source.)
 * If these are present, it adds them to the html string.
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>`;
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
  getRandomColor();
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * Asynchronous code to print a quote every 10 seconds without interaction
 * from the user.
***/

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
