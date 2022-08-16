// Their are certain operation(methods ) we can apply on our object.
const hritik={
    firstName:'hritik',
    lastName: 'singh',
birthYear:2001,
    friends:['shivam','jay','darshan'],
     calcAge: function(){
        console.log(this) //this refers to current object  
        // return 2022- hritik.birthYear;

        return 2022- this.birthYear;
    }
}
console.log(hritik.calcAge())