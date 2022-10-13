'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties=Object.keys(openingHours)
console.log(properties)

console.log(`we are open at ${properties.length} days`)

for(const day of properties){
    console.log(day)
}


// print value of property
const values= Object.values(openingHours)
console.log(values)

//print whole object
const entries= Object.entries(openingHours)
// console.log(entries)



// -----------------------------

for(const [key ,{open,close} ] of entries) 
{
    console.log(` on ${key} we are open at ${open} and close at ${close} `)
}