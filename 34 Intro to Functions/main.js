`use strict`

const bookings=[];
const createbooking= function(flightNum,numOfPassenger=1, flightPrice= 199 * numOfPassenger ){

    // ES5
    //  numOfPassenger= numOfPassenger || 1;
    //  PRICE= 199 * numOfPassenger;
    const booking={flightNum, numOfPassenger, flightPrice}

    console.log(booking);
    bookings.push(booking);
}

createbooking('MUM23',1,2000)
createbooking('MUM22',2,1000)
createbooking('MUM44',3,9000)
createbooking('MUM53',4,200)