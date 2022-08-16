//  we can access the objeccts usiong the dot(.) or brackets []
// difference btwn these brackets are that we can use any expression under these.

const hritik = {
  firstName: "hritik",
  lastName: "Singh",
  age: 21,
};
console.log(hritik.firstName); //acsess using dot
console.log(hritik["lastName"]); //access using brackets

const songs = {
  punjabiSong: " kehndi hundi si",
  englishSong: "let me love you",
  hindiSong: "Chehra hai kya chand khila hai",
};
console.log(songs.hindiSong) //dot 
const song= 'Song';
console.log(songs['punjabi' + song]) // using bracket and value passed as expressino and it won't work with dot as dot do not take values as expression
