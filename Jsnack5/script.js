// CREARE UN ARRAY VUOTO. CHIEDERE PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO. SE è DISPARI INSERICILO NELL'ARRAY

var listaNumeri = []; // array vuoto

for (var i = 0; i < 6; i++) {
  // ciclo for di 6
  var nuovoNumero = parseInt(prompt("inserisci un numero")); // variabile nuovo numero
  // console.log(nuovoNumero)
  if (nuovoNumero % 2) {
    // se nuovo numero dispari lo pusho nell'array
    listaNumeri.push(nuovoNumero);
  }
}

console.log(listaNumeri); // output
