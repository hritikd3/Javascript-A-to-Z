

const oneWord= function (str){
  return  str.replace(/ /g ,'').toLowerCase();

}
const upperWord= function(str){
    const [first, ...others] =str.split(' ');
return [first.toUpperCase(), ...others].join(' ')
}
//here modifier is an higher order fucntion as it take function as an argument
//here we see how abstraction works, the modifier function don't know how this str is modified it only want string and do something 
const modifier= function(str, fn){
 console.log(` Original string ${str}`);
 console.log(` Modified string ${fn(str)}`);
 console.log(` Modified by: ${fn.name} function`);

}
// here the upperWord and oneWord are behaving as callback 
modifier('Javascript is the best!', upperWord)
modifier('Javascript is the best!', oneWord)

// example of callback 
// Js uses callback all the time 
const high5= ()=>{
    console.log('👋🏽');
}
//here addEventListner behaves like higherOrderFunction and the high5 passed as callback hence is calback function
document.body.addEventListener('click', high5)  
['hritik','emily'].forEach(high5);  //high5 passed as callback here