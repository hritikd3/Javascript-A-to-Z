console.log(" USING FOR EACH")

const movements = [1200, 300, -120, 900, 220, -412, 730];

movements.forEach(function(movement){
  if (movement > 0) {
    console.log(`you deposited  ${movement}`);
  } else {
    console.log(`you withdraw ${Math.abs(movement)}`);
  }
})
