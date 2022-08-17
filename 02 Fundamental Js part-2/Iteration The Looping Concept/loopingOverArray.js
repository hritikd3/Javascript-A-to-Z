//iterate over the array and print all the values of it
const hritik=[
    'hritik', 'Singh',2022-2001,'programmer' ,['madhav, mukund, mradul']
]

const types=[];
for(let i=0;i< hritik.length; i++){
console.log(hritik[i], typeof hritik[i])
types[i]= typeof hritik[i]
}
console.log(types)