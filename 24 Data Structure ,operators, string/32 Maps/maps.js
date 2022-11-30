// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// Methods used in Map() 
// 1. get()
// 2. set()
// 3. delete()
// 4. size()
// 5. has()

const map1= new Map();
// each key is refering to a value 
map1.set('a', 1);
map1.set('b',2);


console.log(map1.get('a')) // 1
console.log(map1.size) // 2

map1.set('a', 20);
console.log(map1.get('a'))  //20

map1.delete('b');  //b has deleted now 
console.log(map1)   // 'a'=> 20