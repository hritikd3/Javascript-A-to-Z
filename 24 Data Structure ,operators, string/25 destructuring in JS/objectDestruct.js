"use strict";

const movie = {
  Title: "First Love, Last Rites",
  location: ['italy', 'spain','madrid'],
  "Production Budget": 300000,
  "Release Date": "Aug 07 1998",
   Distributor: "Strand",
  "Major Genre": "Drama",
  "IMDB Rating": 6.9,
  "IMDB Votes": 207,
};

console.log(movie['Title']);
console.log(movie.Title);

const [first, ,second]= movie.location;  //value of object get destructured here 
console.log(first,second)    //italy , madrid