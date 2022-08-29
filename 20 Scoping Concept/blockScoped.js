// let and const are block scoped 
// means they are accessible within block otherwise throw refernce error

{
    const foo="hola "
}
console.log(foo) // reference error 

if( year >= 1981  && year <= 1996){
    let  millenial= true;
}
console.log(millenial) //reference error 