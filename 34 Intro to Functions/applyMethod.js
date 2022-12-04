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

// book.call(bhopalExpress, 4554544, "Madhav ");
// only diff between call() and apply() is that call accepts values as list of arguments but in apply it is single array of arguments 
book.apply(avantikaExpress,[23 , ' hritik '])


//another example 
const person={
    fullName:function(city, country){
        return this.firstName + " " + this.lastName + " " + city + " ," + country;
    }
}
const person1={
    firstName: ' Hritik ',
    lastName: 'Singh ',
}
console.log(person.fullName.apply(person1,['Indore', ' MP']))


// another example 

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

