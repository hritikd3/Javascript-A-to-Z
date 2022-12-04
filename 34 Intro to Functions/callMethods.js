// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// syntax 
// The call() method calls the function with a given this value and arguments provided individually.

const avantikaExpress={
  trainName: ' avantika express',
  seatCode: 'AE',
  booking:[],
  book: function(trainNum, name){
    //this refers to object
    console.log(`${name}is going to Bhopal by${this.trainName} and the PNR No is ${this.seatCode}${trainNum} `);

  }
}

avantikaExpress.book(122251221, ' Hritik ')
avantikaExpress.book(184512220, ' Emily ')

const book= avantikaExpress.book;
//it does not work 
// book(23,'hritik ')

// call() method comes here in play
book.call(avantikaExpress, 254111112, ' Raghav ')
console.log(avantikaExpress)

const bhopalExpress={
  trainName: ' intercity ',
  seatCode:' CX',
  booking:[],
}
book.call(bhopalExpress, 4554544, 'Madhav ')
