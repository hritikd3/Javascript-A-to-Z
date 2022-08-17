// continue; continue statement is opposite to that of break statement, instead of terminating the loop, it forces to execute the next iteration of the loop.

const hritik = ["hritik", 23, "parle-g", "codder", 2001];

console.log(" ONLY STRING WILL BE PRINTED");
for (let i = 0; i < hritik.length; i++) {
  if (typeof hritik[i] === "number") continue;
  console.log(hritik[i], typeof hritik[i]);
}

// break  To avoid these useless iterations, we can use the break statement in our program. Once the break statement is encountered the control from the loop will return immediately after the condition gets satisfied
console.log(" ONLY STRING WILL BE PRINTED");
for (let i = 0; i < hritik.length; i++) {
  if (typeof hritik[i] === "number") break;
  console.log(hritik[i], typeof hritik[i]);
}

//Master example of Continue; statement
for (let i = 1; i <= 10; i++) {
  // If i is equals to 6,
  // continue to next iteration
  // without printing
  if (i == 6) continue;
  // otherwise print the value of i
  else console.log(i);
}
