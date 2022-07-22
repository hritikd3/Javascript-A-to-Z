                            //   == vs === 
// ==  is known as Loosely equals to , it checks only value

// === is known as strictly equals to , it checks value as 1well as the data type 

console.log(23== 23 )// true

console.log('23 ' == 23)  // true : checked only the value so both are equal

console.log('22' === 22)  // false : checked both value ands data type so one is string and number so not equal

const userAge= prompt(" what is your age")
console.log( userAge)
console.log(typeof userAge)  //string

if(userAge >= 18){
    console.log( 'you became an adult ')
}else{ 
    console.log(" choti bacchi ho kya")
}