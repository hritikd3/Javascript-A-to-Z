// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
const calctip= (bill )=>{
    return bill >=50 && bill <=300 ? bill *0.15 : bill * 0.20 ;
}

// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bill = [ 125, 555 , 44];

// 3. Create an array 'tips'
const tip= [calctip(bill[0]), calctip(bill[1]), calctip(bill[2])]
console.log(tip)

// 4.  Bonus: Create an array 'total' containing the total values, so the bill + tip
const total= (bill[0]+tip[0] , bill[1]+tip[1], bill[2]+tip[2] ) 
console.log(total)