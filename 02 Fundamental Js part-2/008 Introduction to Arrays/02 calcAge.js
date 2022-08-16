const calcAge = function (birthyear) {
  return 2022 - birthyear;
};

const year = [2001, 2002, 2003, 2004];
const age1= calcAge(year[0]);
const age2= calcAge(year[1]);
const age3= calcAge(year[year.length-1]);
console.log(age1);
console.log(age2);
console.log(age3);

// specifying in array format
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length-1])];
console.log(ages)
