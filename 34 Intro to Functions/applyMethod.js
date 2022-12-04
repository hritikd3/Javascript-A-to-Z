const avantikaExpress = {
  trainName: " avantika express",
  seatCode: "AE",
  booking: [],
  book: function (trainNum, name) {
    //this refers to object
    console.log(
      `${name}is going to Bhopal by${this.trainName} and the PNR No is ${this.seatCode}${trainNum} `
    );
  },
};

const book= avantikaExpress.book;
const bhopalExpress = {
  trainName: " intercity ",
  seatCode: " CX",
};
// book.call(bhopalExpress, 4554544, "Madhav ");
// only diff between call() and apply() is that call accepts values as list of arguments but in apply it is single array of arguments 
book.apply(avantikaExpress,[23 , ' hritik'])