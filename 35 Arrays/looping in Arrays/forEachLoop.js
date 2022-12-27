console.log(" USING FOR EACH")

const movements = [1200, 300, -120, 900, 220, -412, 730];

// FOR EACH ACT AS HIGHER ORDER FUNCTION AND THE FUNCTION UNDER IT ACT AS CALLBACK FUNCTION 
movements.forEach(function(movement){  
  if (movement > 0) {
    console.log(`you deposited  ${movement}`);
  } else {
    console.log(`you withdraw ${Math.abs(movement)}`);
  }
})
