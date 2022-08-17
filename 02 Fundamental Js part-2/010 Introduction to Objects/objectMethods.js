// Their are certain operation(methods ) we can apply on our object.
const hritik={
    firstName:'hritik',
    lastName: 'singh',
    age:'21',
birthYear:2001,
job: 'programmer',
driverLicense: true,
    friends:['shivam','jay','darshan'],
     calcAge: function(){
        console.log(this) //this refers to current object  
        // return 2022- hritik.birthYear;
        return 2022- this.birthYear;
    },
    getsummary: function(){
        return `${this.firstName} is a ${this.age} years old ${
          this.job
        } and he has his ${this.driverLicense ? "a" : "no"} driverLicense `;
    }
}
console.log(hritik.calcAge())


// hritik is a 21 years old programmer and he has (a or no) driverLicense
console.log(hritik.getsummary())