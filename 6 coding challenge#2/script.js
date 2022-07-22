/*

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// solution
const markHeight = 1.88;
const markWeight = 95;

const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = Math.floor(markWeight / markHeight ** 2);
const johnBMI = Math.floor(johnWeight / (johnHeight * johnHeight));
console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`Mark has higher BMI ${markBMI} than John ${johnBMI}`)
}else{
    console.log(`John has higher BMI ${johnBMI} than Mark ${markBMI}`);
}