//bind method does not directly invokes the method but gives you a copy of exactly same which can be invoke later.
// also with the bind method an object can borrow the method from another object


// example below creates 2 object (person and member)  


const person={
    firstName: 'hritik',
    lastName: 'singh',
    fullName: function(){
        return this.firstName + "  " + this.lastName;
    }
}
const member={
    firstName: " robert",
    lastName: ' wadra',

}

let fullName= person.fullName.bind(member)