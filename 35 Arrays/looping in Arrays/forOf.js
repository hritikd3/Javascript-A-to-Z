// WRITE A PROGRAM USING FOR OF TO CHECK WHAT AMOUNT YOU DEPOSITED IN BANK AND WHAT YOU WITHDRAWED

const movements= [1200,300,-120,900, 220,-412,730];

for(const movement of movements){
    if(movement > 0){
        console.log(`you deposited  ${movement}`)
    }else{
    console.log(`you withdraw ${Math.abs(movement)}`)
    }
}