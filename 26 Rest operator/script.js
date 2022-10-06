// rest operator with function 

const add=function(...numbers){ //we are taking the values from arguments and passing in parameter of function using he rest operator 
    let sum=0;
 for(let i=0;i<numbers.length;i++){
    sum += numbers[i];
}
console.log(sum)
 
}
add(2,3)
add(2,3,7)
add(2,3,4,2,3,4)