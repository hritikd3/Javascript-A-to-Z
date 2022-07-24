// switch statements we use as an alternative if nested if-else

const shoes = prompt("Which brand you are looking for ?");
// const shoes= 'puma'
switch (shoes) {
  case "nike":
    console.log("Just Do It");
    break;
  case "puma":
    console.log("FOREVER FASTER IS ALWAYS FIRST, NEVER SECOND, NEVER THIRD.");
    break;
  case "jordan":
    console.log("It's gotta be the shoes!");
    break;
  case "adidas":
    console.log("Impossible is Nothing");
    break;

  default:
    console.log("No matching brandfs available at this moment.");
}
