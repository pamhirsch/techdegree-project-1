/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var randomQuote = '';
/***
 * `getRandomQuote` function generates a random number between 0 and the
 * length of the array 'quotes'. It then uses that random number as the index
 * to grab a specific quotes object.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

getRandomQuote();
console.log(randomQuote);
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
