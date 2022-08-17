const array=['hritik',99,'singh','allIsWell']

for(i=array.length-1;i >=0;i--){
    console.log(i,array[i])

}


//Nested looping 
for(i=0;i<array.length;i++){
    console.log(`=========Learning counting ${i}`)

    for(let i=0;i<array.length; i++){
        console.log(`count number : ${i}`)
    }
}