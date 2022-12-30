
// step1
const calcAverageHumanAge = function (ages) {
  // step 2
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4)); //ternary operator
  // console.log(humanAges)

  // step 3
  const adult = humanAges.filter((age) => age >= 18);
  console.log(humanAges)
  console.log(adult);

  //step 4
  const avgHuman = adult.reduce((acc, cur) => acc + cur, 0) / adult.length;
  return avgHuman;
};

const avg1=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2=calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1,avg2)  //returning avg of adult array