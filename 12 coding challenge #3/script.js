const dolphinScore1=96;
const dolphinScore2=108;
const dolphinScore3=89;

const koalaScore1=88;
const koalaScore2= 91;
const koalaScore3= 110;

const averageDolphin = (dolphinScore1+dolphinScore2 + dolphinScore3)/3
const averagekoala = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(averageDolphin, averagekoala)

if( averageDolphin > averagekoala){
    console.log("Dolphin is the winner" )
}
else{
    console.log("Koala is the winner ")
}