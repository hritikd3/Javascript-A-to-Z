document.getElementById('button').addEventListener('click',()=>{
    const text= document.getElementById('textarea').value;
    console.log(text)

    const rows= text.split('\n');
    console.log(rows)

    for(const row of rows){
        const [first,second]=row.toLowerCase().trim().split('_');
console.log(row, first , second)
        const output= `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(output)
    }
})