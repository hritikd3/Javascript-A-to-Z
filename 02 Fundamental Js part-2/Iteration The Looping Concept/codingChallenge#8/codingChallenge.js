const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
// console.log(tips);
// console.log(total);


function calcAverage(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
    sum += parseInt(arr[i]);

}
 return sum/ arr.length;

}
console.log(calcAverage([3,2,5,2]))
console.log(calcAverage(tips));
console.log(calcAverage(total));