// A CLOSURE IS CLOSED  OVER VARIABLE ENIRONMENT OF EXCUTION CONTEXT N WHICH FUNCTION WAS CREATED EVEN AFTER EXCUTION CONTEXT IS GONE
// OR -> A CLOSURE IS FUNCTION WITH ITS LEXICAL ENVIRONMENT WHEN BULDLED TOGETHER IS KNOWN AS CLOSURES

const secureBooking= function (){
    let passenger=0;

    return function(){  //it is acting as closures
  passenger++;
  console.log(`${passenger} Passenger`)
    }
}

const booker= secureBooking();


// this function can increamenting passenger value just because of closures
booker();  //1 Passenger
booker();  //2 Passenger
booker();  //3 Passenger


let f;
const g= function(){
    const a=23;
    f= function (){
        console.log(a*2) 
    }
}
g();
f();
console.dir(f)

//callback function
// setTimeout(function(){
//     console.log("hey")
// },3000)


// EXAMPLE OF CLOSURES 
const boardPassengers= function(n, wait){
    const perGroup= n/3;

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`their are 3 groups with ${perGroup} passenger each`)
    }, wait* 1000);

    console.log(`will start boarding in ${wait} seconds`)
}

boardPassengers(180,3)
