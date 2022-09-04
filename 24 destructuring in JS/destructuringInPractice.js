// nested array destructuring
const nestedArray = [2, 3, [5, 6, 7]];

const [i, , [j, k, l]] = nestedArray;
console.log(i, j, k, l);
