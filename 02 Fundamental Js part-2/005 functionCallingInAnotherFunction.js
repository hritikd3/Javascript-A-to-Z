//  function callign inside another function will help to avoid DRY rule and make the code efficient by modifying it .
const cutPeieces= function(fruits ){
return fruits * 4
}

const fruitProcessor= function(apples, mango){

    const applePeices= cutPeieces(apples)
    const mangoPeices= cutPeieces(mango)
    return juice= `Juice made with ${applePeices} apples and ${mangoPeices} mango's`

}
console.log(fruitProcessor(4,2))