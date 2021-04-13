// STAMPA LE POTENZE DI 2 FINO A 1000

// var x = 2;

// var flag = false;

// for (var i = 1; i <= 10; i++){
//   var potenza = console.log(Math.pow(x,i));
//   console.log("-------")
//   if (Math.pow(x,i) < 100){
//     flag = true;
//   }
// }

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

