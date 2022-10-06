// short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result

// It follows two operators:-  AND(&&) ... OR(||)

// 1) AND(&&) circuiting :- it check falsy value and if get so it stops the evaluatio and return false, if the operand is true so it check the whole expression and return the last operand  

console.log(0 && 'hritik') //f && t returns false
console.log('hritik' && 0)  // f && t returns true
console.log('cat' && 'dog') // t && t returns dog
console.log('' && false); //f && f return false i.e ""




