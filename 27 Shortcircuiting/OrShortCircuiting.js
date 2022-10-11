// 2) OR (||) short circuiting

// it checks from left to right , if the operand is truthy so it stops the evaluatio and returns true. 

console.log(2 || null) //   t || f returns true
console.log('' ||  null) // f || f return false
console.log(true || 0) // t || f return true 
console.log(undefined || null) // f || f return false or last value
