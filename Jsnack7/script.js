// STAMPA LE POTENZE DI 2 FINO A 1000


var limite = 1000;
var potenza = 1;
var counterPotenza = 1;

//soluzione 1
// while (potenza < limite){
//   console.log(potenza);
//   console.log("Elevo il 2 alla " +counterPotenza);
//   potenza = Math.pow(2, counterPotenza);
//   counterPotenza++;
// }

//soluzione 2
while (potenza < limite){
  console.log(potenza);
  potenza *= 2;
}

//soluzione 3
// for(var i = 1; potenza < limite; i++){
//   potenza = Math.pow(2,i);
//   console.log(potenza);
// }

