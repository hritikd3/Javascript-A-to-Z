// We are required to write a JavaScript function that takes in an array of numbers and sorts the array such that first all the even numbers appear in ascending order and then all the odd numbers appear in ascending order.



const arr = [12, 3, 42, 5, 3, 4, 2, 33, 26];


const isEven=(ele)=>ele%2===0;
const  isSort=(a,b)=>{ 
    if(isEven(a) && !isEven(b)) 
    {
        return -1
    
}if(!isEven(a) && isEven(b)){
    return 1;
}
return a-b;
}

const evenOddSort= function(arr){
    arr.sort(isSort)
}
evenOddSort(arr)
console.log(arr)