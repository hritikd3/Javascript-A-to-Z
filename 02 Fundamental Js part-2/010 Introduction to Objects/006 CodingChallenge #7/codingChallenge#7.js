// 1. For each of them, create an object with properties for their full name, mass, and
// // height (Mark Miller and John Smith)

const mark = {
  fullName: "mark Miller",
  member2: "john Smith",
  mass: 78,
  height: 1.69,
  calcBMI:function (){  //2.Create a 'calcBMI' method on each object to calculate the BMI 
    this.bmi= this.mass/ this.height ** 2;

 return this.bmi;
  }
};
const john = {
    fullName: 'John smith' ,
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
 return this.bmi;  
}
};
mark.calcBMI()
john.calcBMI()
console.log(mark.bmi,john.bmi);

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall
