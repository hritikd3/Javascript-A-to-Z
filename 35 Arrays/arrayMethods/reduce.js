const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance= movements.reduce(function(acc,cur,i){
    console.log(`Iteration ${i}: ${acc}`)
    return acc+cur;
},0)  //this 0 is for the start accumulator kaha se karna 
console.log(totalBalance)


//alternate using arrow function
const balance= movements.reduce((acc,cur)=> acc+ cur,0)
console.log(balance)