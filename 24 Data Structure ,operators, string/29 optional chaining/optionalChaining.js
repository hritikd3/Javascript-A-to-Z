// OPTIONAL CHAINING (?. ) :- The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

const users=[{
    name: 'hritik',
    email:' hello@hritik.com',

}]


// const users=[ ];
 // if you comment out the users above object and try to run this empty array it willprint users not exist bcz in optional chaining it checks from left first that if someryhing exst print it 



// due to optional chaining i here it will check the users object that hey do it contains the users at index 0 with property as name exist so print it otherwise move oto second condition and print that 
console.log(users[0]?.name ?? 'users not exist') 

