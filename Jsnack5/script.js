// CREARE UN ARRAY VUOTO. CHIEDERE PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO. SE è DISPARI INSERICILO NELL'ARRAY

var listaNumeri = [ ]

for(var i = 0; i < 6; i++){
  var nuovoNumero = parseInt(prompt("inserisci un numero")); // variabile nuovo numero
  // console.log(nuovoNumero)
  if (nuovoNumero%2){
    listaNumeri.push(nuovoNumero)
  }
}

console.log(listaNumeri)
