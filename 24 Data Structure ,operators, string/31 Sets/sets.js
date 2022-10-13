// The Set object lets you store unique values of any type, whether primitive values or object references.

// Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order

const list=new Set(['ice-cream', 'juice', 'candy', 'sandwich', 'ice-cream','corn',1,4]);// so here we see that we have duplicate items but the Set() returns only unique value

console.log(list)

// has ( it same as  include)

console.log(list.has("corn"))
console.log(list.has(3))

// return the size of the array
console.log(list.size)

// it delete the items from array
console.log(list.delete('candy'))
console.log(list)


console.log(list[1]) // it will return 'undefined' ecause in set their is nothing like returning index element


console.log(new Set('hritik'))
