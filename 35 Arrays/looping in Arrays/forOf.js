// WRITE A PROGRAM USING FOR OF TO CHECK WHAT AMOUNT YOU DEPOSITED IN BANK AND WHAT YOU WITHDRAWED

const movements= [1200,300,-120,900, 220,-412,730];

for(const movement of movements){
    if(movement > 0){
        console.log(`you deposited  ${movement}`)
    }else{
    console.log(`you withdraw ${Math.abs(movement)}`)
    }
}

console.log("*********using different way**********")

const arr = [1200, 300, -120, 900, 220, -412, 730];
//he the two parameter we passed = [index, current element of array]
for(const [i,value] of arr.entries()){
     if(value > 0){
        console.log(`value ${i+1}: you deposited  ${value}`)
    }else{
    console.log(`value ${i+1}: you withdraw ${Math.abs(value)}`)
    }
}