const calcAge= function(birthYear){
    return 2022- birthYear;
}

const yearsUntillRetired= function (birthYear, firstName){
    const age= calcAge(birthYear);
    const retirementAge=  60- age;

    if(retirementAge >0){
        console.log(`${firstName} will be retired in ${retirementAge}`)
    }else{
        console.log(` ${firstName} already been retired`)
    }
}
console.log(yearsUntillRetired(2001, 'hritik'))