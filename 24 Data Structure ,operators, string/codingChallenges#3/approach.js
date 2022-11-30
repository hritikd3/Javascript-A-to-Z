// given:- 
 const gameEvents = new Map([
   [17, "⚽ GOAL"],
   [36, "� Substitution"],
   [47, "⚽ GOAL"],
   [61, "� Substitution"],
   [64, "� Yellow card"],
   [69, "� Red card"],
   [70, "� Substitution"],
   [72, "� Substitution"],
   [76, "⚽ GOAL"],
   [80, "⚽ GOAL"],
   [92, "� Yellow card"],
 ]);

 // 1 task 
 // here we have printed no duplicates from gameEvent using set
 const events= [...new Set(gameEvents.values())]
 console.log(events)

 // 2.
gameEvents.delete(64)

// 3.
console.log(`An event happened, on average, every ${ 90/ gameEvents.size } minutes`)

// 4. looping over gameEvent

for(const [minute,event] of gameEvents){
    const half= minute <= 45  ? 'FIRST' : 'SECOND';
    console.log(`${half} [HALF] ${minute} : ${ event}`)
}

