const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "hritik",
  lastName: "singh",
};
const person2 = {
  firstName: "madhav",
  lastName: "mishra",
};

// This will return "John Doe":
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
