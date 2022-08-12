//strict mode helps developer to avoid accidental error.

'use-strict';

let driversLicense=false;
const hePassedTest= true;

if(hePassedTest) driversLicense=true ; //here if i do typo , so using strict mode i will get error in console but without using strict mode console will be blank

if(driversLicense)console.log("i can drive")