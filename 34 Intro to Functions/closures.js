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

